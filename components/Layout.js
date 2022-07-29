import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <div className={`${isDarkMode ? 'dark' : ''} min-h-screen flex flex-col`}>
            <Navbar handleDarkMode={handleDarkMode} />
            <main className="flex-1 dark:bg-slate-900 bg-slate-300 transition-color duration-300">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;