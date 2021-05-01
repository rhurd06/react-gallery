import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({photoArray, getPhotos}){
    console.log('My gallery props are:', {photoArray, getPhotos});

    return (
        <div>
            {photoArray.map( photo => 
                <GalleryItem 
                key={photo.id} 
                photo={photo} 
                // description={photo.description} 
                // likes={photo.likes}
                getPhotos={getPhotos}
                />
            )}
        </div>
    )
}

export default GalleryList;