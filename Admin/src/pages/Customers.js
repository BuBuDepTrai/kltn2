import React, { useEffect } from "react";
import { Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/cutomers/customerSlice";
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

const columns = [
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
];

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const customerstate = useSelector((state) => state.customer.customers);
  const data1 = [];
  for (let i = 0; i < customerstate.length; i++) {
    data1.push({
      key: i + 1,
      name: customerstate[i].firstname + " " + customerstate[i].lastname,
      email: customerstate[i].email,
      mobile: customerstate[i].mobile,
      role: customerstate[i].role,
    });
  }

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
