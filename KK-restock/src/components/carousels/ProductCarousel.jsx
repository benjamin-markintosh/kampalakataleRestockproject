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
    src: image2,
  },
];

const renderSlides = productImage.map((image) => (
  <div key={image.id}>
    <img src={image.src} alt={image.alt}  />
    
  </div>
));

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className=" ml-10  ">
      <div>
        <h2 className="font-semibold">Add to cart</h2>
        <h5 className="font-light text-sm">HOME/MASTERMUTWE HARDWARE/CEMENT</h5>
      </div>

      {/* w-[799.35px] h-[710px] */}
      <Carousel
        className=" z-10  "
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

