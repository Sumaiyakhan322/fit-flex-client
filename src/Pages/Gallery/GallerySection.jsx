import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GallerySection = () => {
   
    const [images, setImages] = useState([]);
    const [totalImages, setTotalImages] = useState(0);
    const [loadedImages, setLoadedImages] = useState(12);
  
    useEffect(() => {
      // Fetch images from your API or database
      // You can replace this with your actual API endpoint
      fetch('http://localhost:5000/gallery')
        .then((response) => response.json())
        .then((data) => {
           
          setImages(data[0].allImages);
          setTotalImages(data[0].totalImages);
          console.log('Fetched data:', data);
        });
    }, []);
  
    // Function to load more images
    const loadMoreImages = () => {
      setLoadedImages((prevLoadedImages) => prevLoadedImages + 12);
    };
  
    return (
        <div>
        <h1>Image Gallery</h1>
        <div className="image-grid">
          {images?.slice(0, loadedImages).map((image) => (
            <Link to={`/image/${image.imgNumber}`} key={image.imgNumber}>
              <img
                src={image.image}
                alt={`Image ${image.imgNumber}`}
                className="image"
              />
            </Link>
          ))}
        </div>
        {loadedImages < totalImages && (
          <button onClick={loadMoreImages}>Load More</button>
        )}
      </div>
    );
  };
export default GallerySection;