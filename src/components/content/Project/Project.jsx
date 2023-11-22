import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import "./project.css"

function Project({
  ...data
}) {
  return (
    <Card
      title={data.projectName}
      style={{
        width: 240,
        textAlign: 'center',
      }}
      cover={
        <div style={{ width: '100%', height: 150, overflow: 'hidden', textAlign: 'center' }}>
          <img
          className='img-card'
            alt="example"
            src={data.imageUrl}
           
          />
        </div>
      }
    >
      <Link to={`/projects/${data._id}`}>
        <Button>Details</Button>
      </Link>
    </Card>
  );
}

export default Project;
