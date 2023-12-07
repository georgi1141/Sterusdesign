import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { addProject, getOne } from '../../../services/projectService';
import { useGlobalContext } from "../../globalContext/GlobalAppContext";
import { ToastContainer, toast } from "react-toastify";
import "../AddNewProject/AddNewProject.css"
import { useNavigate, useParams } from 'react-router-dom';

const { TextArea } = Input;


 
const EditProject = () => {
    
  const {projectId} = useParams('projectId') 
  const [editedProject, setEditedProject] = useState({})
  const { user } = useGlobalContext();
  const navigate = useNavigate()
  const [form] = Form.useForm();

  useEffect(()=>{
    getOne(projectId)
    .then(res => {
        form.setFieldsValue({ 
            projectName: res.projectName || '',
            description: res.description || '', 
            imageUrl: res.imageUrl || '',
          });

    })
    .catch(err=>console.log(err))

  },[projectId, form])


  const onFinish = async (values) => {
    console.log(values)
    // try {
      
    

    //   navigate('/projects')


    // } catch (error) {

    //   toast.error(error.message)
      
    // }
  };

  return (
    <div className='form-container'>
      <ToastContainer position="top-center" />
      <h2 className='new-project-h2'>Edit Project</h2>
    
      <Form
      form={form}
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
        <Form.Item  label="Project Name" name="projectName" rules={[{ required: true, message: 'Please enter the project name!' }]}>
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
            Edit Project
          </Button>
        </Form.Item>
      </Form>
      </div>

  );
};

export default EditProject;
