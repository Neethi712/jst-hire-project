import React from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import "../viewcourse/DocumentationPage.css";
import Navbar from "../globalComponent/Navbar";

const DocumentationPage = ({ pageContent, pageDetails }) => {
  const { docName } = useParams();

  const placeholderMarkdown = `${pageContent} ${pageDetails.codeBlock}`;

  return (
    <>
      <Navbar />
      <div className="documentation-page">
        <div className="markdown-container">
          <div className="markdown-content">
            <Markdown>{placeholderMarkdown}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentationPage;
