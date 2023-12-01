import Title from "../../Shared/Title";
import GallerySection from "./GallerySection";
import PageTitle from "./PageTitle";


const Gallery = () => {
    return (
        <div>
           <PageTitle></PageTitle> 
           <Title heading={'Our Gallery '}></Title>
           <GallerySection></GallerySection>
        </div>
    );
};

export default Gallery;