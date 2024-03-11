import React, { useState } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: '2px dashed #aaa',
    borderRadius: '4px',
  },
}));

const DocumentManagement: React.FC = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleUpload = () => {
    // Here you can handle file upload logic, for example, send the file to a server
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper
          className={classes.paper}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => document.getElementById('fileInput')?.click()}
        >
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept=".pdf,.docx"
          />
          <p>Click here to browse files</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
          className={classes.paper}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <p>or Drag and Drop files here</p>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          disabled={!selectedFile}
          onClick={handleUpload}
        >
          Upload
        </Button>
      </Grid>
    </Grid>
  );
};

export default DocumentManagement;
