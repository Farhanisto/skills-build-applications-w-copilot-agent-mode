import React, { useEffect, useState } from 'react';

const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
const endpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/teams/` : 'http://localhost:8000/api/teams/';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched teams:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Teams</h2>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{team.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
