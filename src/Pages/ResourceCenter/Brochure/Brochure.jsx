import React from 'react';
import brochurePdf from '../../../Assets/Resource Centre/Brochure/Brochure.pdf'; // Adjust path as necessary

const Brochure = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen p-4 pt-10">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
                Brochure
            </h1>
            <div className="mt-8" style={{ overflow: 'hidden', width: '100%', height: '900px' }}>
                <iframe 
                    src={brochurePdf} 
                    title="Brochure"
                    style={{ 
                        width: '150%', // Scale width
                        height: '150%', // Scale height
                        transform: 'scale(0.75)', // Adjust scale factor
                        transformOrigin: 'top left', // Transform from top-left corner
                        border: 'none' 
                    }} 
                />
            </div>
        </div>
    );
}

export default Brochure;
