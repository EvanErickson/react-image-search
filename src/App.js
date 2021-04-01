import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, getData ] = useState( [] );

  // added empty array at end so that it isn't endless loop
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => getData(res.data))
  }, []);

  return(
    <div className="container">
      <ul>
        {
          data.map(todo => (
            <li key={todo.id}>
              {todo.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

  export default App;