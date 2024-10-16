import React from 'react';

const TalkToUs = () => {
    return (
        <div className="relative flex flex-col justify-center items-start h-1/2 p-6 bg-gradient-to-r from-orange-600 to-orange-300 overflow-hidden">
            {/* Decorative Shapes */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="absolute bg-white rounded-full w-40 h-40 opacity-25 transform -translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bg-white rounded-full w-32 h-32 opacity-20 transform translate-x-1/4 translate-y-1/4"></div>
                <div className="absolute bg-white rounded-full w-48 h-48 opacity-15 transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="flex flex-col items-start w-full max-w-md pl-6 z-10">
                <div className="border-t-4 border-l-4 border-orange-500 p-4 mb-4">
                    <h1 className="text-6xl font-bold text-white">
                        Talk to Us
                    </h1>
                </div>
                <p className="text-xl text-white mb-6">
                    We’d love to hear from you! Whether you have a question or need assistance, 
                    feel free to reach out using the options below.
                </p>

                <div className="flex space-x-4 mt-4">
                    <a href="mailto:info@esipl.net" className="bg-white text-orange-600 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 text-center">
                        Get in Touch
                    </a>
                    <a href="/send-query" className="bg-white text-orange-600 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 text-center">
                        Send Your Query
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TalkToUs;
