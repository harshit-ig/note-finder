import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const FileUpload = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [numPages, setNumPages] = useState(null);

    // Handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile(file);  // Save PDF file in state
        } else {
            alert('Please select a valid PDF file');
        }
    };

    // Handle PDF loading
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <h2>Upload your PDF</h2>
            <input type="file" onChange={handleFileChange} accept="application/pdf" />
            {pdfFile && (
                <div>
                    <p>PDF file uploaded: {pdfFile.name}</p>
                    
                    {/* Render the PDF */}
                    <Document
                        file={pdfFile}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                            )
                        )}
                    </Document>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
