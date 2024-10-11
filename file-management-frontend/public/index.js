// Fetch and display files on load
document.addEventListener('DOMContentLoaded', () => {
    fetch('/files')
      .then((res) => res.json())
      .then((data) => {
        const fileList = document.getElementById('file-list');
        fileList.innerHTML = '';
        data.files.forEach((file) => {
          const fileElement = document.createElement('div');
          fileElement.textContent = file;
          fileList.appendChild(fileElement);
        });
      });
  });
  
  // Handle file upload
  const uploadForm = document.getElementById('uploadForm');
  uploadForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        // Optionally reload file list after upload
      });
  });
  
  // Create a new directory
  document.getElementById('createDir').addEventListener('click', () => {
    fetch('/create-directory', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      });
  });
  
  // Delete a file
  document.getElementById('deleteFile').addEventListener('click', () => {
    const filename = prompt('Enter the filename to delete:');
    fetch('/delete-file', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filename }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      });
  });
  