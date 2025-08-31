import React, { useEffect, useState } from 'react';

const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
const endpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/users/` : 'http://localhost:8000/api/users/';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Users endpoint:', endpoint);
        console.log('Fetched users:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Users</h2>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
