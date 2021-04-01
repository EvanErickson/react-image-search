import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function imageSearch() {
  alert('hi');
}
function App() {
  return(
    <Button 
    variant="contained"
    color="primary"
    onClick={imageSearch}
    >
      Hello World
    </Button>
  )
}

export default App;
