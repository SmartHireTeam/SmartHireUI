// JobDescriptionManager.tsx

import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Paper, Grid } from '@material-ui/core';
import { Add as AddIcon, Save as SaveIcon, Delete as DeleteIcon } from '@material-ui/icons';
import axios from 'axios';

interface JobDescription {
  id: number;
  jobCode: string;
  jobDomain: string;
  jobRequisitionId: string;
  jobDescription: string;
}

const JDManagement: React.FC = () => {
  const [jobDescriptions, setJobDescriptions] = useState<JobDescription[]>([]);
  const [formData, setFormData] = useState<Partial<JobDescription>>({});
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch job descriptions when component mounts
    fetchJobDescriptions();
  }, []);

  const fetchJobDescriptions = async () => {
    try {
      const response = await axios.get('/api/job-descriptions');
      setJobDescriptions(response.data);
    } catch (error) {
      console.error('Error fetching job descriptions:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/api/job-descriptions/${editingId}`, formData);
      } else {
        await axios.post('/api/job-descriptions', formData);
      }
      setFormData({});
      setEditingId(null);
      fetchJobDescriptions();
    } catch (error) {
      console.error('Error saving job description:', error);
    }
  };

  const handleEdit = (id: number) => {
    const jobDesc = jobDescriptions.find(desc => desc.id === id);
    if (jobDesc) {
      setFormData(jobDesc);
      setEditingId(id);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/job-descriptions/${id}`);
      fetchJobDescriptions();
    } catch (error) {
      console.error('Error deleting job description:', error);
    }
  };

  return (
    <div>
      <Typography variant="h5">Job Descriptions</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              name="jobCode"
              label="Job Code"
              value={formData.jobCode || ''}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="jobDomain"
              label="Job Domain"
              value={formData.jobDomain || ''}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="jobRequisitionId"
              label="Job Requisition ID"
              value={formData.jobRequisitionId || ''}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              name="jobDescription"
              label="Job Description"
              value={formData.jobDescription || ''}
              onChange={handleInputChange}
              multiline
              fullWidth
              rows={4}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={editingId ? <SaveIcon /> : <AddIcon />}
            >
              {editingId ? 'Update' : 'Save'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        {jobDescriptions.map(jobDesc => (
          <Paper key={jobDesc.id} elevation={3} className="job-desc-card">
            <Typography variant="h6">{jobDesc.jobCode}</Typography>
            <Typography variant="subtitle1">{jobDesc.jobDomain}</Typography>
            <Typography variant="subtitle2">{jobDesc.jobRequisitionId}</Typography>
            <Typography>{jobDesc.jobDescription}</Typography>
            <Button onClick={() => handleEdit(jobDesc.id)} startIcon={<SaveIcon />}>
              Edit
            </Button>
            <Button onClick={() => handleDelete(jobDesc.id)} startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default JDManagement;
