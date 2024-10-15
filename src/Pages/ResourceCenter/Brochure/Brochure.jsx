import React from 'react';

const Brochure = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen p-4">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
                Brochure
            </h1>
            <iframe 
                src="../../../Assets/Resource Centre/Brochure/Brochure.pdf" // Replace with your specific PDF path
                title="Brochure PDF"
                className="mt-8 w-full h-64 sm:h-80 md:h-96" // Responsive height
                frameBorder="0"
            />
        </div>
    );
}

export default Brochure;
