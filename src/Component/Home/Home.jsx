
import { Suspense } from 'react';
import Hero from '../Hero/Hero';
import PopularSkills from '../PopularSkill/PopularSkill';
import TopMentor from '../TopMentor/TopMentor';

const Home = () => {
    return (
        <div>
            <div>
                <Hero />
            </div>
            <div>
                <Suspense fallback={<span>loading....</span>}>
                    <PopularSkills />
                </Suspense>
            </div>
            <div>
                <Suspense fallback={<span>loading....</span>}>
                <TopMentor />
                </Suspense>
            </div>
        </div>
    );
};

export default Home;