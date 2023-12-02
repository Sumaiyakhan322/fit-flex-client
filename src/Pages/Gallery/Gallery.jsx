import { Helmet } from "react-helmet-async";
import Title from "../../Shared/Title";
import GallerySection from "./GallerySection";
import PageTitle from "./PageTitle";


const Gallery = () => {
    return (
        <div>
            <Helmet>
        <title> Fit-Flex-Online|Gallery </title>
      </Helmet>
           <PageTitle></PageTitle> 
           <Title heading={'Our Gallery '}></Title>
           <GallerySection></GallerySection>
        </div>
    );
};

export default Gallery;