import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import CustomSlider from "./Slider";
import Application from "./Application";
import News from "./News";
import Clients from "./Clients";
import logoGIF from '../../Assets/logo/logoaniamtion.gif'; // Adjust the path to your GIF
import { motion } from 'framer-motion';
import './styles.css'; // Ensure to import your CSS file

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the loading time as needed

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <motion.img 
                    src={logoGIF} 
                    alt="Logo" 
                    className="mb-4 w-1/4 sm:w-1/3 md:w-1/4" 
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.5 }} 
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {/* Slider Section */}
            <div className="relative">
                <CustomSlider />
            </div>
            
            {/* About Us Section */}
            <div>
                <AboutUs />
            </div>
            
            {/* News Section */}
            <div>
                <News />
            </div>
            
            {/* Application Section */}
            <div>
                <Application />
            </div>
            
            {/* Clients Section */}
            <div>
                <Clients />
            </div>
        </div>
    );
};

export default HomePage;
