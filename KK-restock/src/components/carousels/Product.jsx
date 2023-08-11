import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const productImage = [
  {
    id: "1",
    alt: "image 1",
    src: image1,
  },
  {
    id: "2",
    alt: "image 2",
    src: image2,
  },
  {
    id: "3",
    alt: "image ",
    src: image3,
  },
];

const renderSlides = productImage.map((image) => (
  <div key={image.id}>
    <img src={image.src} alt={image.alt} className="h-[98] w-[100px]" />
    
  </div>
));

function Product() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="flex m-auto p-10 mt-10  w-[352px] h-[250px] ">
      <Carousel
        className="max-w-lg  w-lg h-[96]"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={productImage[currentIndex]}
        onChange={handleChange}
      >
      {renderSlides}
      </Carousel>
    </div>
  );
}
export default Product;
