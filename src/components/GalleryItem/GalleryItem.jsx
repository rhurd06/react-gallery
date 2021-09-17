import './GalleryItem.css';
import {useState} from 'react';
import axios from 'axios';

function GalleryItem({getPhotos, photo}) {
    console.log('GalleryItem props are:', photo);

    const [state, setState] = useState(true)
 

    function setToggle() {
        if(state) {
            setState(false);
        } else {
            setState(true);
        }
    }

    function addLike (id) {
        console.log('clicked the like button', id);

    axios.put(`/gallery/like/${id}`)
    .then(( response) => {
        console.log('response in PUT', response);
        getPhotos();
    })
    .catch(err => {
        console.log('Error in PUT', err);
    })
}


    return (
        <div className="photos">
            <div>
                {state ? (
                <img onClick={setToggle} src={photo.path} className="testImage" /> 
                ) : (
                <p onClick={setToggle}> {photo.description}</p>)}
                <p>{photo.likes} likes</p>
                <button onClick={(event) => addLike(photo.id)}>Like</button>
            </div>
        </div>
    )
}

export default GalleryItem;