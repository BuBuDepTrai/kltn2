import React, { useEffect, useState } from "react";
import { Table, Tag, Button, Modal, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, blockUser, unblockUser, updateUser } from "../features/cutomers/customerSlice";
import styled from "styled-components";

const RoleTag = styled(Tag)`
  &.User {
    background-color: #f3f0ff;
    color: purple;
  }
  &.Admin {
    background-color: #e6fffb;
    color: green;
  }
`;

const columns = (editUser, handleBlock, handleUnblock) => [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Role",
    dataIndex: "role",
    render: (role) => {
      let color = "";
      if (role === "Admin") {
        color = "green";
      } else {
        color = "purple";
      }
      return (
        <RoleTag className={role} color={color}>
          {role}
        </RoleTag>
      );
    },
  },
  {
    title: "Actions",
    render: (text, record) => (
      <div>
        <Button onClick={() => editUser(record)}>Edit</Button>
        {record.isBlocked ? (
          <Button onClick={() => handleUnblock(record.key)}>Unblock</Button>
        ) : (
          <Button onClick={() => handleBlock(record.key)}>Block</Button>
        )}
      </div>
    ),
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const customerState = useSelector((state) => state.customer.customers);
  const data1 = customerState.map((customer, index) => ({
    key: customer._id,
    name: `${customer.firstname} ${customer.lastname}`,
    email: customer.email,
    mobile: customer.mobile,
    role: customer.role,
    isBlocked: customer.isBlocked,
  }));

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleBlockUser = (Id) => {
    dispatch(blockUser(Id))
      .unwrap()
      .then(() => message.success("User blocked successfully"))
      .catch((error) => {
        console.error("Failed to block user:", error);
        message.error(`Failed to block user: ${error}`);
      });
  };

  const handleUnblockUser = (Id) => {
    dispatch(unblockUser(Id))
      .unwrap()
      .then(() => message.success("User unblocked successfully"))
      .catch((error) => {
        console.error("Failed to unblock user:", error);
        message.error(`Failed to unblock user: ${error}`);
      });
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        dispatch(updateUser({ ...currentUser, ...values }))
          .unwrap()
          .then(() => {
            message.success("User updated successfully");
            setIsModalVisible(false);
            setCurrentUser(null);
          })
          .catch((error) => {
            console.error("Failed to update user:", error);
            message.error(`Failed to update user: ${error}`);
          });
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentUser(null);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    if (currentUser) {
      form.setFieldsValue({
        name: `${currentUser.firstname} ${currentUser.lastname}`,
        email: currentUser.email,
        mobile: currentUser.mobile,
      });
    }
  }, [currentUser, form]);

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns(handleEditUser, handleBlockUser, handleUnblockUser)} dataSource={data1} />
      </div>
      <Modal title="Edit User" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input the email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="mobile" label="Mobile" rules={[{ required: true, message: 'Please input the mobile number!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Customers;
