import React from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import '../viewcourse/Sidebar.css'
import '../viewcourse/DocumentationPage.css';

const DocumentationPage = ({ pageTitle, pageContent, pageDetails }) => {
    const { docName } = useParams();
    const markdownPath = `/docs/${docName}.md`;

    const placeholderMarkdown = `
  \`\`\`h1
  # ${pageTitle}
  \`\`\`
      ${pageContent}
      ${pageDetails.codeBlock}
    `
        ;

    return (
        <div className="documentation-page">
            <div className="markdown-container">
                <Markdown>{placeholderMarkdown}</Markdown>
            </div>
        </div>
    );
};

export default DocumentationPage;
