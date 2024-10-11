// src/components/FileDetails.js
import React from 'react';

const FileDetails = ({ file }) => {
  if (!file) {
    return <div>Select a file to see details</div>;
  }

  return (
    <div>
      <h2>File Details</h2>
      <p><strong>Name:</strong> {file.name}</p>
      <p><strong>Size:</strong> {file.size} bytes</p>
      <p><strong>Type:</strong> {file.type}</p>
      {/* Add any other details you need */}
    </div>
  );
};

export default FileDetails;
