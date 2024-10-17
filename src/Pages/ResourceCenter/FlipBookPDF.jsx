// FlipBook.jsx
import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import FlipPage from 'react-flip-page';

const FlipBook = ({ pdfFile }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-3xl w-full">
        <FlipPage
          style={{
            height: '600px',
            width: '100%',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          {pdfFile.pages.map((page, index) => (
            <div key={index} className="flex justify-center items-center">
              <Document file={pdfFile.url}>
                <Page pageNumber={index + 1} width={600} />
              </Document>
            </div>
          ))}
        </FlipPage>
      </div>
    </div>
  );
};

export default FlipBook;
