import {useState} from 'react';
import axios from 'axios';

function GalleryItem(props) {
    console.log('GalleryItem props are:', props);

    const [toggle, setToggle] = useState(true);

    const togglePhoto = () => {
        setToggle(!toggle);
        console.log('in toggle');
    }

    const addLike = (event) => {
        let id = event.currentTarget.dataset.id;
        console.log(id);
    axios({
        method: 'PUT',
        url: `/gallery/like/${id}`
    })
    .then( response => {
        console.log('response in PUT', response);
        props.getPhotos();
    })
    .catch(err => {
        console.log('Error in PUT', error);
    })
}

    return (
        <div>
            {toogle && <img src={props.path}
                onClick={tooglePhoto}
            />}
            {/* When image gets clicked, show description message */}
        </div>
    )
}