import React from 'react';
import { Form, Input, Button } from 'antd';
import { addProject } from '../../../services/projectService';
import { useGlobalContext } from "../../globalContext/GlobalAppContext";
import { ToastContainer, toast } from "react-toastify";
import "./addNewProject.css"
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;


 
const AddNewProject = () => {

  const { user } = useGlobalContext();
  const navigate = useNavigate()


  const onFinish = async (values) => {
    try {
      
      const res = await addProject(values,user.accessToken)
      navigate('/projects')


    } catch (error) {

      toast.error(error.message)
      
    }
  };

  return (
    <div className='form-container'>
      <ToastContainer position="top-center" />
      <h2 className='new-project-h2'>Add New Project</h2>
    
      <Form
      className='form'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        style={{
          width: 600,
          backgroundColor: 'gray',
          padding: '1em',
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Project Name" name="projectName" rules={[{ required: true, message: 'Please enter the project name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter the project description!' }]}>
          <TextArea rows={10} />
        </Form.Item>
        <Form.Item label="Image Url" name="imageUrl" rules={[{ required: true, message: 'Please enter the Image Url!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Upload Project
          </Button>
        </Form.Item>
      </Form>
      </div>

  );
};

export default AddNewProject;
