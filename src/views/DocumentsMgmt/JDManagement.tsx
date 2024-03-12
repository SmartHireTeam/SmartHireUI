import { Divider } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const JDManagement: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      try {
        const response = await axios.post('YOUR_API_ENDPOINT', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Upload successful', response.data);
      } catch (error) {
        console.error('Error uploading file', error);
      }
    } else {
      console.error('No file selected');
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

  return (
    <Container >
      <Row>
        <Col sm={12}>
          <h2 className='Title' >Manage Job Description</h2>
        </Col>
      </Row>
      <Row >
        <Col sm={12}>
          <Form style={{ padding: '20px' }}>
            <Row className='mb-3'>
              <Col xs={6}>
                <Form.Group as={Col} controlId='formJobCode'>
                  <Form.Label>Job Code</Form.Label>
                  <Form.Control></Form.Control>
                </Form.Group>
              </Col>

              <Col xs={6}>
                <Form.Group as={Col} controlId='formDomain'>
                  <Form.Label>Domain Name</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>



            <Row>
              <Col xs={11}>
                <div
                  className="drop-area"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Choose file:</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                  </Form.Group>
                  <Button variant="primary" onClick={handleUpload}>
                    Upload
                  </Button>
                </div>
              </Col>
              <Col>
              
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    <hr></hr>
      <Row className='mb-3'>
        <Col xs={6} style={{ alignItems: 'right' }}>

        </Col>

        <Col xs={6}>
          <Button variant="success" onClick={handleUpload}>
            SUBMIT
          </Button> &nbsp;&nbsp;&nbsp;
          <Button variant="danger" onClick={handleUpload}>
            CANCEL
          </Button>
        </Col>
      </Row>

    </Container>
  );
};

export default JDManagement;
