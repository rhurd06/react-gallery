import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){
    console.log('My gallery props are:', props);
    // for( let i=0; i < props.photoArray.length; i++) {
    //     console.log('GalleryList loop');
    // }
    return (
        <div>
            {props.photoArray.map( image => 
                <GalleryItem key={image.id} image={image}
                />
            )}
        </div>
    )
}

export default GalleryList;