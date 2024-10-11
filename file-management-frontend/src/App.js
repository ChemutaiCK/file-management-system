import React, { useState } from 'react';
import FileList from './components/FileList';
import FileDetails from './components/FileDetails';
import UploadFile from './components/UploadFile';

function App() {
  // State to hold the list of uploaded files
  const [files, setFiles] = useState([]);
  // State to hold the currently selected file for details view
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file upload
  const handleUpload = (file) => {
    // Logic to handle file upload, e.g., adding to the files array
    setFiles((prevFiles) => [
      ...prevFiles,
      { name: file.name, size: file.size, type: file.type },
    ]);
  };

  // Function to handle file selection for details view
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="App">
      <UploadFile onUpload={handleUpload} />
      <FileList files={files} onFileSelect={handleFileSelect} />
      <FileDetails file={selectedFile} />
    </div>
  );
}

export default App;
