import React from 'react';

const pdfFiles = [
    { title: 'Brochure', url: 'http://example.com/path/to/brochure.pdf' }, // Replace with the actual hosted URL
];

const CaseStudy = () => {
    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3 pt-10">
                Case Study
            </h1>
            <div className="mt-8 mb-4 flex space-x-4">
                {pdfFiles.map((pdf, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <a 
                            href={pdf.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                        >
                            View {pdf.title}
                        </a>
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
        </div>
    );
}

export default CaseStudy;
