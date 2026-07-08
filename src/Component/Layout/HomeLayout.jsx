import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const HomeLayout = () => {
    return (
        <div>
                <header className="sticky top-0 z-50">
                    <Navbar />
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>
        </div>
    );
};

export default HomeLayout;