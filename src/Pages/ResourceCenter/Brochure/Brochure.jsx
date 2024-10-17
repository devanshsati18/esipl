import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

// Set the workerSrc to a stable path
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js';

const Brochure = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const pdfFilePath = '../Resource Centre/ISO Certificates/ESIPL-ISO Certificate.pdf'; // Replace with the path to your PDF file

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Brochure</h1>
            <div className="border border-gray-300 shadow-lg p-4 bg-white mb-4 max-w-xl">
                <Document
                    file={pdfFilePath}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => setPageNumber(pageNumber - 1)}
                        disabled={pageNumber <= 1}
                        className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setPageNumber(pageNumber + 1)}
                        disabled={pageNumber >= numPages}
                        className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
            <a
                href={pdfFilePath}
                download
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
                Download PDF
            </a>
        </div>
    );
};

export default Brochure;
