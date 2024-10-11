// src/components/FileDetails.js
import React from 'react';

const FileDetails = ({ file }) => {
    return( <div className="container mt-4">
        <h3> File Details</h3>


            {file ? (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{file.name}</h5>
                        <p className="card-text">Size: {file.size}</p>
                        <p className="card-text">Date Modified: {file.dateModified}</p>
                    </div>
                </div>
            ) : (
                <p>No file selected</p>
            )}
        </div>
    );
};

export default FileDetails;


  if (!file) {
    return <div>Select a file to see details</div>;
  }

  return (
    <div>
      <h2>File Details</h2>
      <p><strong>Name:</strong> {file.name}</p>
      <p><strong>Size:</strong> {file.size} bytes</p>
      <p><strong>Type:</strong> {file.type}</p>
      {/* any other details  */}
    </div>
  );


export default FileDetails;
