import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get('/api/files/')
      .then(response => setFiles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Files</h2>
      <ul>
        {files.map(file => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;
