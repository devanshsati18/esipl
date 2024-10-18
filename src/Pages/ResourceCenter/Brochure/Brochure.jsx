import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the workerSrc to enable rendering PDFs
pdfjs.GlobalWorkerOptions.workerSrc = "/public/pdf.worker.js";


const Broucher = () => {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file="./Brochure.pdf"
                onLoadSuccess={onDocumentLoadSuccess}

            >
                <Page pageNumber={pageNumber} />
            </Document>
            {/* <p>Page {pageNumber} of {numPages}</p>
            <button 
                disabled={pageNumber <= 1} 
                onClick={() => setPageNumber(pageNumber - 1)}
            >
                Previous
            </button>
            <button 
                disabled={pageNumber >= numPages} 
                onClick={() => setPageNumber(pageNumber + 1)}
            >
                Next
            </button> */}
        </div>
    );
};

export default Broucher;
