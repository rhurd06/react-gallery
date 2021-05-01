import {useState} from 'react';
import axios from 'axios';

function GalleryItem(props) {
    console.log('GalleryItem props are:', props);

    const image = props.image;

    // const [toggle, setToggle] = useState(true);

    // const togglePhoto = () => {
    //     setToggle(!toggle);
    //     console.log('in toggle');
    // }

//     const addLike = (event) => {
//         let id = event.currentTarget.dataset.id;
//         console.log(id);
//     axios({
//         method: 'PUT',
//         url: `/gallery/like/${id}`
//     })
//     .then( response => {
//         console.log('response in PUT', response);
//         props.getPhotos();
//     })
//     .catch(err => {
//         console.log('Error in PUT', error);
//     })
// }

    return (
        <div>
            <img src={image.path} width="300px" height="300px"
            />
            {/* When image gets clicked, show description message */}
        </div>
    )
}

export default GalleryItem;