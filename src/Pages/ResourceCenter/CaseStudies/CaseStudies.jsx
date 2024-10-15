import React from 'react';
import brochurePdf from '../../../Assets/Resource Centre/Brochure/Brochure.pdf'; // Adjust path as necessary
const CaseStudy =()=>{
    return(
        <div>
             <div className="flex flex-col justify-center items-center h-screen p-4 pt-12">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
                Brochure
            </h1>
            <iframe 
                src={brochurePdf} 
                className="mt-8 w-full h-96 sm:h-[600px] md:h-[800px] lg:h-[900px]" // Increased height values
                title="Brochure"
                style={{ border: 'none' }} // Optional: Remove border
            />
        </div>
        </div>
    )
}

export default CaseStudy;