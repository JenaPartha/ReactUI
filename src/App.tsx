import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    // Make a GET request to the Node.js backend
    axios.get('http://localhost:3001/api/users')
      .then((response: any) => {
        setData(response.data[0].username);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>React TypeScript App</h1>
      <p>Data from Node.js backend: {data}</p>
    </div>
  );
};

export default App;
