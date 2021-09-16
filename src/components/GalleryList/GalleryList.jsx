import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({photoArray, getPhotos}){
    console.log('My gallery props are:', {photoArray, getPhotos});

    return (
        <div className="test">
            {photoArray.map( photo => 
                <GalleryItem 
                key={photo.id} 
                photo={photo} 
                getPhotos={getPhotos}
                />
            )}
        </div>
    )
}

export default GalleryList;