import React, { useState } from 'react';

const pdfFiles = [
    { title: 'ESIPL Certificate', url: '/Assets/Resource Centre/ISO Certificates/ESIPL-ISO Certificate.pdf' },
    { title: 'GIS Certificate', url: '/Assets/Resource Centre/ISO Certificates/Globe Infra Solutions-ISO Certificate.pdf' },
];

const IsoCertificate = () => {
    const [currentPdf, setCurrentPdf] = useState(pdfFiles[0].url);

    const handlePdfChange = (url) => {
        setCurrentPdf(url);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen p-4">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
                ISO Certificate
            </h1>
            <div className="mt-8 mb-4">
                {pdfFiles.map((pdf, index) => (
                    <button 
                        key={index} 
                        onClick={() => handlePdfChange(pdf.url)} 
                        className="mx-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        {pdf.title}
                    </button>
                ))}
            </div>
            <iframe 
                src={currentPdf} 
                title="ISO Certificate"
                style={{ 
                    width: '100%',  
                    height: '900px', 
                    border: 'none' 
                }} 
            />
        </div>
    );
}

export default IsoCertificate;
