import { useEffect, useRef } from "react";

/**
 * BackgroundShader Component
 * @param {Object} props
 * @param {number} props.opacity - Background visibility (0.0 to 1.0)
 * @param {string} props.activeBackground - Backdrop style ("shader" | "video-digital" | "video-cosmic" | "overlay-hybrid" | "dark-minimal")
 * @param {number} props.videoSpeed - Video playback rate (0.5 to 1.5)
 */
export default function Background({
  opacity = 0.85,
  activeBackground = "shader",
  videoSpeed = 1.0,
}) {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  // ভিডিও স্পিড কন্ট্রোল করা
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = videoSpeed;
    }
  }, [videoSpeed, activeBackground]);

  // WebGL Shaders রেন্ডার করার logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (
      !canvas ||
      activeBackground === "dark-minimal" ||
      activeBackground === "video-digital" ||
      activeBackground === "video-cosmic"
    ) {
      return;
    }

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    let animationFrameId;
    let isDestroyed = false;

    // Vertex Shader
    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment Shader (Liquid Motion & Brand Gradients)
    const fs = `
      precision highp float;

      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
          vec2 uv = v_texCoord;
          float time = u_time * 0.15;
          
          float n1 = snoise(uv * 1.5 + time);
          float n2 = snoise(uv * 2.5 - time * 0.8 + n1 * 0.5);
          float n3 = snoise(uv * 4.0 + time * 0.5 + vec2(n1, n2));
          
          vec3 deepNavy = vec3(0.05, 0.07, 0.13);     // #0d1221
          vec3 electricBlue = vec3(0.30, 0.45, 1.0);  // #4d73ff
          vec3 softViolet = vec3(0.52, 0.40, 0.90);   // #8566e6
          vec3 darkSurface = vec3(0.03, 0.04, 0.08);   // #080a14
          
          vec3 color = mix(darkSurface, deepNavy, uv.y + n1 * 0.1);
          
          float blueMask = smoothstep(-0.2, 0.8, n2);
          color = mix(color, electricBlue, blueMask * 0.35);
          
          float violetMask = smoothstep(0.1, 0.9, n3);
          color = mix(color, softViolet, violetMask * 0.2);
          
          vec2 mouseNorm = u_mouse / u_resolution;
          float mouseDist = distance(uv, mouseNorm);
          color += electricBlue * (1.0 - smoothstep(0.0, 0.6, mouseDist)) * 0.08;
          
          float vignette = 1.0 - distance(uv, vec2(0.5)) * 0.5;
          color *= vignette;

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(type, src) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const compiledVs = compileShader(gl.VERTEX_SHADER, vs);
    const compiledFs = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!compiledVs || !compiledFs) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, compiledVs);
    gl.attachShader(program, compiledFs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouseCoords = { x: canvas.clientWidth / 2, y: canvas.clientHeight / 2 };

    const handleMouseMove = (event) => {
      if (isDestroyed) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouseCoords.x = nx * canvas.width;
        mouseCoords.y = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const syncSize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => syncSize());
      resizeObserver.observe(canvas);
    }
    syncSize();

    const render = (time) => {
      if (isDestroyed) return;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uResolution) gl.uniform2f(uResolution, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouseCoords.x, mouseCoords.y);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, [activeBackground]);

  // Video Backgrounds URLs
  const digitalVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-numbers-31907-large.mp4";
  const cosmicVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-star-field-background-simulation-loop-32832-large.mp4";

  const showVideo =
    activeBackground === "video-digital" ||
    activeBackground === "video-cosmic" ||
    activeBackground === "overlay-hybrid";

  const videoSrc = activeBackground === "video-cosmic" ? cosmicVideoUrl : digitalVideoUrl;

  return (
    <div
      className="fixed inset-0 w-full h-full -z-50 select-none pointer-events-none overflow-hidden transition-all duration-1000 bg-black"
      style={{ opacity }}
    >
      {/* 1. Looping High Quality Video Layer */}
      {showVideo && (
        <video
          ref={videoRef}
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 opacity-80"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* 2. Interactive WebGL Shader Layer */}
      {(activeBackground === "shader" || activeBackground === "overlay-hybrid") && (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            activeBackground === "overlay-hybrid" ? "mix-blend-screen opacity-45" : "opacity-100"
          }`}
          style={{ display: "block" }}
        />
      )}

      {/* Dark Vignettes & Soft Shadows */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,#000000_100%)] opacity-50 pointer-events-none" />
    </div>
  );
}