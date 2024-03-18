import CardTwo from "../Components/CardTwo";
import FeaturesWeOffer from "../Components/FeaturesWeOffer/FeaturesWeOffer";
import FilterBarShop from "../Components/FilterBarShop";
import Footer from "../Components/Footer";
import ImageAndCurrentPath from "../Components/ImageAndCurrentPath";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";
import DiningImage from "../assets/images/diningImg.png";

const Shoppage = () => {
  return (
    <>
      <Navbar />
      <ImageAndCurrentPath />
      <FilterBarShop />

      <div className="cardsDisplay">
        <div className="wrapperdiv">
          <div className="cardsSection">
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />

          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          <CardTwo
            heading="Lolito"
            price={7000}
            description="lorem lorem lorem lorem lorem"
            imgurl={DiningImage}
          />
          </div>
          <Pagination />
        </div>
      </div>

      <FeaturesWeOffer />


      <Footer />

      



    </>
  );
};

export default Shoppage;
