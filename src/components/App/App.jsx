import React, {useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


function App() {
  const [photoArray, setPhotoArray] = useState([]);

  const getPhotos = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log('response from getPhotos', response);
      setPhotoArray(response.data);
    })
    .catch(error => {
      console.log('error in GET', error);
    })
  }

  useEffect( () => {
    getPhotos();
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lamar Lawrence</h1>
        </header>
        {/* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/> */}
        <GalleryList photoArray={photoArray} getPhotos={getPhotos}/>
      </div>
    );
}

export default App;
