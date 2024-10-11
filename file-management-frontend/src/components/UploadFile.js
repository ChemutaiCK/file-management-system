// src/components/UploadFile.js
import React, { useState } from 'react';

const UploadFile = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      setFile(null); // Clear the file input after upload
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button className="btn btn-success" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default UploadFile;
