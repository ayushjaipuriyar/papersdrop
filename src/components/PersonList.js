import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function PersonList() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;

  return (
    <div>
      <p>List of Users</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span> Name : {user.name}</span> <br></br>
            <span>Phone: {user.phone}</span>
            <br></br>
            <span>Email: {user.email}</span>
            <br></br>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
}
