import React from "react";

const Brochure = () => {
    const pdfUrl = '/Resource Centre/Brochure/Brochure.pdf'; // Ensure this is the correct path

    return (
        <div className="min-h-screen bg-gray-200 p-4 pt-20">
            <h1 className="text-7xl font-extrabold pt-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
                Erosion Control
            </h1>
            <iframe 
                src={pdfUrl} 
                width="100%" 
                height="600px" 
                title="Brochure PDF"
                style={{ border: 'none' }}
            >
                This browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>.
            </iframe>
        </div>
    );
};

export default Brochure;
