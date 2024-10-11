// src/components/FileList.js
import React from 'react';

const FileList = ({ files, onFileSelect}) => {
  return (
    <div>
      <h2>File List</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index} onClick={() => onFileSelect(file)}>
            {file.name}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
