import React, { useEffect, useState } from 'react';

const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
const endpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/` : 'http://localhost:8000/api/leaderboard/';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboard(results);
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Leaderboard</h2>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{entry.team?.name || 'Unknown Team'}</td>
                  <td>{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
