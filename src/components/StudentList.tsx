import React, { useEffect, useState } from "react";
import { Table, Popconfirm } from "antd";
import "antd/dist/antd.css";

const columns: any = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "birthday",
    title: "Birthday",
    dataIndex: "birthday",
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
  },
  {
    key: "rank",
    title: "Rank",
    dataIndex: "rank",
  },
  {
    title: "Action",
    dataIndex: "delete",
    key: "delete",
    render: (text: String, record: any) => {
      <Popconfirm
        title="Sure to delete?"
        onConfirm={() => handleDelete(record?.id)}
      >
        <a>Delete</a>
      </Popconfirm>;
    },
  },
];

const handleDelete = (key: any) => {
  fetch("http://localhost:12345/api/student/" + key, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    res.json().then((response) => {});
  });
};
export default function StudentList() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:12345/api/student")
      .then((res) => res.json())
      .then((response) => {
        setStudent(response.data);
      });
  }, []);
  return (
    <div style={{ margin: 100 }}>
      <Table columns={columns} dataSource={student} />
    </div>
  );
}
