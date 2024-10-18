import React from 'react';
import yourImage from '../../Assets/talktous/talk to us.jpg'; // Update with your image path

const TalkToUs = () => {
    return (
        <div className="relative flex flex-col lg:flex-row justify-between items-center h-screen p-0 bg-gradient-to-r from-orange-600 to-orange-300 overflow-hidden">
            {/* Decorative Shapes */}
            <div className="absolute inset-0 flex justify-center items-center">
                {/* Decorative shapes code remains unchanged */}
                <div className="absolute bg-white rounded-full w-40 h-40 opacity-25 transform" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                <div className="absolute bg-white rounded-full w-32 h-32 opacity-20 transform" style={{ top: '45%', left: '50%', transform: 'translate(-30%, -30%)' }}></div>
                <div className="absolute bg-white rounded-full w-48 h-48 opacity-15 transform" style={{ top: '50%', left: '50%', transform: 'translate(-40%, -40%)' }}></div>
                <div className="absolute bg-white rounded-full w-24 h-24 opacity-30 transform" style={{ top: '55%', left: '50%', transform: 'translate(-60%, -60%)' }}></div>
                <div className="absolute bg-white rounded-full w-36 h-36 opacity-25 transform" style={{ top: '60%', left: '50%', transform: 'translate(-20%, -20%)' }}></div>
                <div className="absolute bg-white rounded-full w-52 h-52 opacity-10 transform" style={{ top: '65%', left: '50%', transform: 'translate(-10%, -10%)' }}></div>
                <div className="absolute bg-white rounded-full w-28 h-28 opacity-20 transform" style={{ top: '70%', left: '50%', transform: 'translate(-70%, -70%)' }}></div>
                <div className="absolute bg-white rounded-full w-44 h-44 opacity-15 transform" style={{ top: '75%', left: '50%', transform: 'translate(-30%, -30%)' }}></div>
            </div>

            {/* Left Side Content */}
            <div className="flex flex-col items-start w-full max-w-md z-10 p-6">
                <div className="border-t-4 border-l-4 border-orange-500 p-4 mb-4">
                    <h1 className="text-5xl font-bold text-white">
                        Talk to Us
                    </h1>
                </div>
                <p className="text-xl text-white mb-6">
                    We’d love to hear from you! Whether you have a question or need assistance, 
                    feel free to reach out using the options below.
                </p>

                <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4">
                    <a href="mailto:info@esipl.net" className="bg-white text-orange-600 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 text-center">
                        Get in Touch
                    </a>
                    <a href="/send-query" className="bg-white text-orange-600 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 text-center mt-2 sm:mt-0">
                        Send Your Query
                    </a>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="flex-1 flex justify-end items-center mt-0">
                <img 
                    src={yourImage} 
                    alt="Talk to Us" 
                    className="h-full w-auto max-h-screen object-contain rounded-lg shadow-lg" // Maintain aspect ratio and prevent overflow
                    style={{ maxWidth: '100%' }} // Prevent overflow
                />
            </div>
        </div>
    );
}

export default TalkToUs;
