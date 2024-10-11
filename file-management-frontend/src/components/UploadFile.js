import React, { useState } from 'react';

const UploadFile = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle file upload logic
    };

    return (
        <div className="container mt-4">
            <h3>Upload File</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fileUpload">Choose file</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="fileUpload"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Upload
                </button>
            </form>
        </div>
    );
};

export default UploadFile;
