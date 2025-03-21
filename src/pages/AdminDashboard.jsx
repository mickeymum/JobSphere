import { useState } from "react";

function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "seeker" },
    { id: 2, name: "Jane Smith", role: "employer" },
  ]);

  const handleRemoveUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Manage users.</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
            <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
