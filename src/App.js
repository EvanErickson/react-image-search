import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    
  },
  button: {
    
  }
}));


function App() {
  const classes = useStyles();
  const [data, getData ] = useState( [] );
  const [imageQuery, setImageQuery] = useState('');

  const handleInputChange = ev => {
    setImageQuery(ev.target.value);
  }

  const resetForm = ev => {
    setImageQuery('');
  }

  
  // //iterate over each element in the array
  // function needleInHaystack(){
  //   var needle = 'Dr';
  //   for (var i = 0; i < dictionary.length; i++){
  //     if(dictionary[i].code == needle){
  //       //We found it
  //       console.log(dictionary[i].name)
  //     }
  //   }
  // }

  // needleInHaystack();

  // added empty array at end so that it isn't endless loop
  // useEffect(() => {
  //   axios.get(`https://api.unsplash.com/search/photos?page=1&query=${imageQuery}&client_id=Bvv6QSo_NqWvGDXVA9md4knVyniYYTEgM6MXKrYQKik`)
  //   .then(res => {
  //     console.log(res)
  //     console.log(res.data.results)
  //     getData(res.data.results)
  //   })
  // }, []);
  
  const imageSearch = () => {
      axios.get(`https://api.unsplash.com/search/photos?page=1&query=${imageQuery}&client_id=Bvv6QSo_NqWvGDXVA9md4knVyniYYTEgM6MXKrYQKik`)
      .then(res => {
        resetForm();
        console.log(res)
        console.log(res.data.results)
        getData(res.data.results)
      })
  }
  

  return(
      <div>
        <Card className={classes.card} elevation={0}>
            <div className="form-floating mt-5 mb-3" >
                <label htmlFor="nameLabel">Search for an Image</label>
                <br />
                <input 
                className="form-control"
                id="imageQuery" 
                name='imageQuery' 
                placeholder="Dragons" 
                value={imageQuery} 
                required 
                spellCheck="true"
                onChange={handleInputChange}></input>
            </div>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={imageSearch}
        >
          Search
        </Button>
        </Card>
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