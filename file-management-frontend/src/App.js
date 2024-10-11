import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileList from './components/FileList';
import FileDetails from './components/FileDetails';
import UploadFile from './components/UploadFile';
import Navbar from './components/Navbar';


function App() {
    return (
        <div>
            <Navbar/>

        </div>
    );

}


 {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = (file) => {
    setFiles((prevFiles) => [
      ...prevFiles,
      { name: file.name, size: file.size, type: file.type },
    ]);
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleCreateDirectory = () => {
    // Logic to create a new directory
    alert('Create Directory feature is not implemented yet!');
  };

  return (
    <div className="App container">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          File Management System
        </a>
        <button className="btn btn-primary" onClick={() => alert('Upload a file')}>
          Upload File
        </button>
        <button className="btn btn-secondary" onClick={handleCreateDirectory}>
          Create Directory
        </button>
      </nav>

      <div className="my-4">
        <UploadFile onUpload={handleUpload} />
      </div>
      
      <div className="my-4">
        <FileList files={files} onFileSelect={handleFileSelect} />
      </div>

      <div className="my-4">
        <FileDetails file={selectedFile} />
      </div>
    </div>
  );
}

export default App;
