import React from 'react';
import './Welcome.css'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';

const WelcomeView: React.FC = () => {

  return (
    <Container>

      <Container>
        <Row>
          <Col sm={12}>
            <h2 className='Title' >Welcome to SMART HIRE a Resume Shortlisting Application</h2>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Card>
            <Card.Header> </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h4 className='heading' >About Us</h4>
                </Card.Title>
                <Card.Text>
                  <p>
                    Welcome to our Resume Shortlisting Application! We are dedicated to providing HR teams with a powerful tool to streamline the resume shortlisting process.
                    Our application leverages cutting-edge technologies such as Python, NLP, OpenAI, Java, React, SQL, and Azure Cloud to help you find the best-matched candidates for your job openings quickly and efficiently.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Card>
              <Card.Header> </Card.Header>
              <Card.Body>
                <Card.Title> <h4 className='heading'>Key Features</h4></Card.Title>
                <Card.Text>
                  <ul>
                    <li><strong>Efficient Matching Algorithms:</strong> Our application utilizes advanced matching algorithms to analyze job descriptions and resumes, ensuring accurate and relevant matches.</li>
                    <li><strong>User-Friendly Interface:</strong> With a clean and intuitive user interface, our application makes it easy for HR personnel to upload documents, review matching results, and manage the shortlisting process.</li>
                    <li><strong>Actionable Insights:</strong> Gain valuable insights and recommendations to make informed decisions during the shortlisting process, helping you identify top candidates effectively.</li>
                    <li><strong>Secure and Scalable:</strong> We prioritize the security and scalability of our application, utilizing Azure Cloud services for document storage and deployment to ensure data integrity and reliability.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Card>
              <Card.Header></Card.Header>
              <Card.Body>
                <Card.Title><h4 className='heading'>How It Works</h4></Card.Title>
                <Card.Text>
                  <ul>
                    <li><strong>Upload Documents:</strong> Simply upload your job descriptions and resumes in PDF or DOCX format using our intuitive document upload feature.</li>
                    <li><strong>Automatic Processing:</strong> Our application automatically processes the uploaded documents using NLP and OpenAI, extracting key information and analyzing content for matches.</li>
                    <li><strong>Review Matching Results:</strong> View detailed matching results between job descriptions and resumes, including match scores and highlighted matching sections.</li>
                    <li><strong>Take Action:</strong> Based on the matching results and actionable insights provided by our application, take informed actions such as scheduling interviews or further reviewing candidate profiles.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WelcomeView;
