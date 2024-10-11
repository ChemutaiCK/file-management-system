import React, { useEffect, useState } from 'react';
import axios from 'axios';


const FileList = ({ files }) => {
    return (
        <div className="container mt-4">
            <h2 className="text-center">Files and Directories</h2>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Date Modified</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file) => (
                        <tr key={file.id}>
                            <td>{file.name}</td>
                            <td>{file.size}</td>
                            <td>{file.dateModified}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FileList;

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
