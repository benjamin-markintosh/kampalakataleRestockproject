import DisplayRatingStars from "../components/DisplayRatingStars";
import { useState, useEffect } from "react";
import DeliveryDetails from "../components/DeliveryDetails";
import Issue from "../components/Issue";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:1337";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { TiTickOutline } from "react-icons/ti";

function ProductCart() {
  const { productId } = useParams();
  // const [review, setReview] = useState();
  const [product, setProduct] = useState([]); // Declare the variable for category name
  //const [loading, setLoading] = useState(true);
  const [supplierName, setSupplierName] = useState("");
  // addproduct

  // addproduct

  useEffect(() => {
    console.log(productId);

    // Fetch the Product Detais using the productId
    axios
      .get(`${API_URL}/api/products/${productId}`) // API endpoint for the products
      .then((response) => {
        console.log(response.data.data.attributes);
        setProduct(response.data.data.attributes);
        //  setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details", error);
      });

    // Fetch a review related to the selected product

    // axios
    //   .get(`${API_URL}/api/products/${productId}?populate=reviews`) // Fetch the product and populate its reviews
    //   .then((response) => {
    //     const productWithReviews = response.data.data;

    //     // Access the reviews data directly from the product
    //     const review = productWithReviews.attributes.reviews.data;

    //     console.log(review);
    //     setReview(review);
    //   })

    // .catch((error) => {
    //   console.error("Error fetching reviews:", error);
    // });

    //fetch supplier
    axios
      .get(`${API_URL}/api/products/${productId}?populate=suppliers`)
      .then((response) => {
        console.log(response.data.data.attributes);
        setProduct(response.data.data.attributes);
        // setLoading(false);

        if (
          response.data.data.attributes.suppliers &&
          response.data.data.attributes.suppliers.data.length > 0
        ) {
          const firstSupplierName =
            response.data.data.attributes.suppliers.data[0].attributes
              .supplier_name;
          console.log(firstSupplierName);
          setSupplierName(firstSupplierName);
        }
      })
      .catch((error) => {
        console.error("Error fetching product details", error);
      });
  }, [productId]);

  // Corousel
  const productImage = [
    {
      id: "1",
      alt: "image 1",
      src: product.image1,
    },
    {
      id: "2",
      alt: "image 2",
      src: product.image2,
    },
    {
      id: "3",
      alt: "image ",
      src: product.image3,
    },
  ];

  const renderSlides = productImage.map((image) => (
    <div key={image.id}>
      <img src={image.src} alt={image.alt} />
    </div>
  ));

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  // add order
  const [isAdded, setIsAdded] = useState(false);

  const [packaging, setPackaging] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [delivery, setDelivery] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderID] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [productName, setProductName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //generate a raandom order Id
    const prefix = "KK";
    const numericPart = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
    const randomOrderId = prefix + numericPart;
    setOrderID(randomOrderId);

    const status = "Pending";
    setOrderStatus(status);

    const productname = product.product_name;
    setProductName(productname);

    console.log(randomOrderId);
    console.log(orderId);
    console.log(orderStatus);
    console.log(packaging);
    console.log(quantity);
    console.log(delivery);
    console.log(address);
    console.log(productName);
    console.log(productId);
    console.log(supplierName);

    try {
      const response = await axios.post(`${API_URL}/api/orders`, {
        packaging,
        quantity,
        delivery,
        address,
        orderId: randomOrderId,
        productName,
        productId,
        orderStatus: status,
        supplierName,
      });

      console.log("Order added:", response.data);
      // Reset form fields after successful submission
      setPackaging("");
      setQuantity(1);
      setDelivery("");
      setAddress("");

      setIsAdded(true);
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  useEffect(() => {
    if (isAdded) {
      // Redirect or show a success message
      // You can also reset any flags used in this useEffect
    }
  }, [isAdded]);

  //add order

  return (
    <div className="inline-flex  justify-between">
      <div className="w-full ">
        <div className="stars my-4 b-4 ">
          <p className="text-xl font-semibold ">{product.product_name}</p>
          <p className="text-md font-base ">Rated</p>

          <div className="w-full flex justify-center">
            <DisplayRatingStars Stars={4} starWidth={6} starHeight={6} />
          </div>
        </div>

        <div className=" ">
          <p className="text-center py-4 mx-2 md:mx-4 text-black text-sm font-normal">
            {product.product_desc}
          </p>
          <h2 className="font-semibold pb-2">Make Your order Now!</h2>
        </div>
        <div className=" flex flex-col  md:grid  md:grid-cols-2 gap-12 ">
          {/* // Corousel   */}
          <div className=" mx-4   ">
            {/* w-[799.35px] h-[710px] */}
            <Carousel
              className=" z-10  w-96 h-50 md:w-full"
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              selectedItem={productImage[currentIndex]}
              onChange={handleChange}
            >
              {renderSlides}
            </Carousel>
          </div>

          {/* /// corouse  */}

          {/* /// Add product */}

          <div className="mx-4 w-96">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 my-4 items-center gap-1  py-1">
                <div>
                  <label className="font-bold text-md">Packaging:</label>
                  <p className="text-sm text-kkblack/70">
                    Paperbag, Boxes, Sacks
                  </p>
                </div>
                <input
                  type="text"
                  value={packaging}
                  onChange={(e) => setPackaging(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 my-4 items-center gap-1  py-1">
                <div>
                  <label className="font-bold text-md">Quantity:</label>
                  <p className="text-sm text-kkblack/70">
                    Enter the exact number of what you want to order
                  </p>
                </div>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 my-4 items-center gap-1  py-1">
                <div>
                  <label className="font-bold text-md">Delivery:</label>
                  <p className="text-sm text-kkblack/70">Pickup or Delivery</p>
                </div>
                <input
                  type="text"
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 my-4 items-center gap-1  py-1">
                <div>
                  <label className="font-bold text-md">Address:</label>
                  <p className="text-sm text-kkblack/70">
                    Give the address of the closest Known place
                  </p>
                </div>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className={`bg-${
                  isAdded ? "kgreen" : "kkyellow"
                } text-kkblack font-bold shadow-md hover:bg-kkorange hover:text-kkwhite duration-300 cursor-pointer w-45 py-2 px-4 rounded-full`}
                onClick={handleSubmit}
                disabled={isAdded}
              >
                {isAdded ? (
                  <span>
                    Added <TiTickOutline />
                  </span>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </form>
          </div>

          {/* /// Add product  */}

          {/* <AddProduct /> */}
        </div>
        <div className="flex">
          <DeliveryDetails />
          <Issue />
        </div>
      </div>
    </div>
  );
}
export default ProductCart;
