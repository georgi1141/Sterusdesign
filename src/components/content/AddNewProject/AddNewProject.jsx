import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Upload, Button } from 'antd';

const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddNewProject = () => {
  const onFinish = async (values) => {
    console.log('Form values:', values);
    // Handle form submission logic here
  };

  return (
    <div>
      <Form
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
        <Form.Item label="TextArea" name="description" rules={[{ required: true, message: 'Please enter the project description!' }]}>
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
