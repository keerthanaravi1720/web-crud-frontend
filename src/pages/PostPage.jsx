

import React, { useState } from 'react';
import { Table, Button, Space, Modal, Form, Input } from 'antd';

const { Column } = Table;

const PostPage = () => {
  const [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      contact: '1234567890',
    },
    // Add more data objects as needed
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedRecord, setSelectedRecord] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (selectedRecord) {
        const updatedData = data.map((item) => {
          if (item.key === selectedRecord.key) {
            return {
              ...item,
              name: values.name,
              age: values.age,
              address: values.address,
              contact: values.contact,
            };
          }
          return item;
        });
        setData(updatedData);
        setSelectedRecord(null);
      } else {
        const newData = {
          key: String(data.length + 1),
          name: values.name,
          age: values.age,
          address: values.address,
          contact: values.contact,
        };
        setData([...data, newData]);
      }

      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
    setSelectedRecord(null);
  };

  const handleDelete = (key) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
  };

  const handleUpdate = (record) => {
    form.setFieldsValue(record);
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={{ marginBottom: '16px' }}>
        Add
      </Button>
      <Table dataSource={data}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Contact" dataIndex="contact" key="contact" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => handleUpdate(record)}>
                Update
              </Button>
              <Button type="danger" onClick={() => handleDelete(record.key)}>
                Delete
              </Button>
            </Space>
          )}
        />
      </Table>
      <Modal
        title={selectedRecord ? 'Update Record' : 'Add Record'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please enter the age' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter the address' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contact"
            name="contact"
            rules={[{ required: true, message: 'Please enter the contact' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PostPage;
