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
    <img src={image.src} alt={image.alt} />
  </div>
));

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className=" mx-4   ">
      {/* w-[799.35px] h-[710px] */}
      <Carousel
        className=" z-10  w-96 h-auto md:w-full"
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
export default ProductCarousel;
