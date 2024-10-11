// Fetch all high-level directories and files
function loadRootDirectory() {
    fetch('/api/directories')  // Ensure your backend is returning the correct data here
        .then(response => response.json())
        .then(data => {
            const directoryList = document.getElementById('directory-list');
            directoryList.innerHTML = '';  // Clear previous content

            data.forEach(item => {
                const listItem = document.createElement('div');
                listItem.textContent = item.name;

                // If it's a directory, set click to load contents
                if (item.type === 'directory') {
                    listItem.onclick = () => loadDirectory(item.path);
                } else {
                    // If it's a file, open file details dialog
                    listItem.onclick = () => openFileDialog(item.path);
                }
                directoryList.appendChild(listItem);
            });
        });
}

// Load contents of a specific directory
function loadDirectory(directoryPath) {
    fetch(`/api/directories?path=${encodeURIComponent(directoryPath)}`)
        .then(response => response.json())
        .then(data => {
            const directoryList = document.getElementById('directory-list');
            directoryList.innerHTML = '';  // Clear previous content

            data.forEach(item => {
                const listItem = document.createElement('div');
                listItem.textContent = item.name;

                if (item.type === 'directory') {
                    listItem.onclick = () => loadDirectory(item.path);
                } else {
                    listItem.onclick = () => openFileDialog(item.path);
                }
                directoryList.appendChild(listItem);
            });
        });
}

// Function to handle opening a file dialog
function openFileDialog(filePath) {
    document.getElementById('file-name').textContent = filePath;
    const fileDialog = document.getElementById('file-dialog');
    fileDialog.style.display = 'block';

    document.getElementById('download-btn').onclick = () => downloadFile(filePath);
    document.getElementById('delete-btn').onclick = () => deleteFile(filePath);
    document.getElementById('rename-btn').onclick = () => renameFile(filePath);
    document.getElementById('parent-dir-btn').onclick = () => navigateToParentDirectory(filePath);
}

// Upload file logic
function uploadFile() {
    const fileInput = document.getElementById('file-upload');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    const currentPath = '/'; // Assuming root directory, change based on where you're uploading

    fetch(`/api/files/upload?path=${encodeURIComponent(currentPath)}`, {
        method: 'POST',
        body: formData
    }).then(() => {
        alert('File uploaded successfully');
        loadRootDirectory();  // Reload the file list after upload
    });
}

// Create directory logic
function createDirectory() {
    const dirName = document.getElementById('new-directory-name').value;
    const currentPath = '/'; // Assuming root directory

    fetch(`/api/directories/create`, {
        method: 'POST',
        body: JSON.stringify({ path: currentPath, name: dirName }),
        headers: { 'Content-Type': 'application/json' }
    }).then(() => {
        alert('Directory created successfully');
        loadRootDirectory();  // Reload the file list after creating directory
    });
}

// Delete file logic
function deleteFile(filePath) {
    fetch(`/api/files/delete?path=${encodeURIComponent(filePath)}`, { method: 'DELETE' })
        .then(() => {
            alert('File deleted successfully');
            loadRootDirectory();  // Reload the file list after deletion
        });
}

// Rename file logic
function renameFile(filePath) {
    const newName = prompt('Enter new file name');
    if (newName) {
        fetch(`/api/files/rename`, {
            method: 'POST',
            body: JSON.stringify({ path: filePath, newName: newName }),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            alert('File renamed successfully');
            loadRootDirectory();  // Reload the file list after renaming
        });
    }
}
