import React, { useState } from 'react';

const pdfFiles = [
    { title: 'ESIPL Certificate', url: '../../../Assets/Resource Centre/ISO Certificates/ESIPL-ISO Certificate.pdf' },
    { title: 'GIS Certificate', url: '../../../Assets/Resource Centre/ISO Certificates/Globe Infra Solutions-ISO Certificate.pdf' },
];

const IsoCertificate = () => {
    const [currentPdf, setCurrentPdf] = useState(pdfFiles[0].url);

    const handlePdfChange = (url) => {
        setCurrentPdf(url);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3 pt-10">
                ISO Certificate
            </h1>
            <div className="mt-8 mb-4 flex space-x-4">
                {pdfFiles.map((pdf, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <button 
                            onClick={() => handlePdfChange(pdf.url)} 
                            className="p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                        >
                            View {pdf.title}
                        </button>
                        <a 
                            href={pdf.url} 
                            download 
                            className="mt-2 text-blue-600 underline hover:text-blue-800"
                        >
                            Download
                        </a>
                    </div>
                ))}
            </div>
            <div className="relative w-full h-3/4 mt-4">
                <iframe 
                    src={currentPdf} 
                    title="ISO Certificate"
                    className="w-full h-full border-none rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}

export default IsoCertificate;
