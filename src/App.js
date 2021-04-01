import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, getData ] = useState( [] );
  const [imageQuery, setImageQuery] = ('');

  // added empty array at end so that it isn't endless loop
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //   .then(res => getData(res.data))
  // }, []);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=hotdog&client_id=Bvv6QSo_NqWvGDXVA9md4knVyniYYTEgM6MXKrYQKik`)
    .then(res => {
      console.log(res)
      console.log(res.data.results)
      getData(res.data.results)
    })
  }, []);

  return(
    <div className="container">
      <ul>
        {
          data.map(images => (
            <li key={images.id}>
              {images.urls.thumb}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

  export default App;