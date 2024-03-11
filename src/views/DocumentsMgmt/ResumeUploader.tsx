import React, { useState } from 'react';
import { Grid, Typography, Button, LinearProgress } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import axios from 'axios';

const ResumeUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    setProgress(0);

    try {
      const response = await axios.post('/api/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const percentage = 0//Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setProgress(percentage);
        },
      });

      // Handle successful upload
      console.log('Upload successful:', response.data);
    } catch (err) {
      // Handle upload error
      setError('An error occurred while uploading the file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" gutterBottom>
          Upload Job Description or Resume
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <input
          type="file"
          id="file-upload"
          accept=".pdf,.docx"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="file-upload">
          <Button variant="contained" component="span" startIcon={<CloudUpload />}>
            Choose File
          </Button>
        </label>
        {file && (
          <Typography variant="body1" color="textSecondary">
            Selected file: {file.name}
          </Typography>
        )}
        {uploading && (
          <LinearProgress variant="determinate" value={progress} style={{ marginTop: '10px', width: '100%' }} />
        )}
        {error && (
          <Typography variant="body1" color="error" style={{ marginTop: '10px' }}>
            {error}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          disabled={uploading}
          onClick={handleUpload}
        >
          Upload
        </Button>
      </Grid>
    </Grid>
  );
};

export default ResumeUploader;

