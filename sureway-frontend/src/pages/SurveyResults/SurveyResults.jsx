import React from 'react';
import { useLocation } from 'react-router-dom';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Register fonts (required for pdfmake)
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const SurveyResults = () => {
  const location = useLocation();
  const surveyResult = location.state.surveyResult;

  const generatePDF = () => {
    // Content of the PDF document
    const pdfContent = {
      content: [
        { text: 'Survey Results', style: 'header' },
        { text: surveyResult, style: 'text' },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        text: {
          fontSize: 12,
        },
      },
    };

    // Create the PDF document
    const pdfDoc = pdfMake.createPdf(pdfContent);

    // Open the PDF in a new tab
    pdfDoc.open();

    // Download the PDF with the given file name
    pdfDoc.download('survey_results.pdf');
  };

  // Html to be rendered
  return (
    <div>
      <h1>Survey Results</h1>
      <p>{surveyResult}</p>
      <button onClick={generatePDF}>Download Results PDF</button>
    </div>
  );
};

export default SurveyResults;