function GalleryList(props){
    console.log('My gallery props are:', props);
    for( let i=0; i < props.photoArray.length; i++) {
        console.log('GalleryList loop');
    }
    return (
        <div>
            {props.photoArray.map( photo => 
                <GalleryItem
                    id = {photo.id}
                    path = {photo.path}
                    description = {photo.description}
                    likes = {photo.likes}
                    getPhotos={props.getPhotos}
                />
            )}
        </div>
    )
}

export default GalleryList;