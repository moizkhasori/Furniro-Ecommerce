import CardOne from "../Components/CardOne"
import Navbar from "../Components/Navbar"
// import HomePageMainImage from "../assets/images/homepageMainImage.jpg"
import DiningImage from "../assets/images/diningImg.png"
import LivingImage from "../assets/images/livingImg.png"
import BedroomImage from "../assets/images/bedroom.png"
import CardTwo from "../Components/CardTwo"
import ImageOneSectionFour from "../assets/images/sec4img1.png"
import ImageTwoSectionFour from "../assets/images/sec4img2.png"
import arrowIcon from "../assets/icons/arrowIcon.png";
import SliderDots from "../Components/SliderDots"
import jugaad from "../assets/images/jugaad.png"

import Footer from "../Components/Footer"
const Homepage = () => {
  return (
    <div>
      <Navbar />

      <section className="homepage-section">
        <div className="homepage-info-container">
          <div>
            <h3>New Arrival</h3>
            <h1>Discover Our New Collection</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque enim facilis vero, perspiciatis.</p>
          </div>
          <button>BUY NOW</button>
        </div>
      </section>


      <section className="section-two">
        <div className="wrapper-div">
          <div className="top-text">
            <h1>Browse The Range</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bottom-images">
            
            <CardOne heading="Dining" imgurl={DiningImage} />
            <CardOne heading="Living" imgurl={LivingImage} />
            <CardOne heading="Bedroom" imgurl={BedroomImage} />
         
            
            
          </div>
        </div>
      </section>


      <section className="section-three">
        <div className="wrapper-div">
          <div className="top-text">
            <h1>Our Products</h1>
          </div>
          <div className="bottom-part">
            <div className="bottom-images">
              <CardTwo heading="Lolito" price={7000} description="lorem lorem lorem lorem lorem" imgurl={DiningImage} />

              <CardTwo heading="Lolito" price={7000} description="lorem lorem lorem lorem lorem" imgurl={DiningImage} />

              <CardTwo heading="Lolito" price={7000} description="lorem lorem lorem lorem lorem" imgurl={DiningImage} />

              <CardTwo heading="Lolito" price={7000} description="lorem lorem lorem lorem lorem" imgurl={DiningImage} />

              <CardTwo heading="Lolito" price={7000} description="lorem lorem lorem lorem lorem" imgurl={DiningImage} />

              <CardTwo heading="Lolito" price={7000} description="lorem lorem lorem lorem lorem" imgurl={DiningImage} />

              <CardTwo heading="Lolito" price={7000} description="lorem lorem lorem lorem lorem" imgurl={DiningImage} />

              <CardTwo heading="Lolito" price={7000} description="lorem lorem lorem lorem lorem" imgurl={DiningImage} />
              
            </div>
            <button>Show More</button>
          </div>
        </div>
      </section>


      <section className="section-four">
        <div className="wrapper-div">
          <div className="left-box">
            <h1>50+ Beautiful rooms inspiration</h1>
            <p>Our designer has already crafted a multitude of stunning room prototypes that are sure to inspire you.</p>
            <button>Explore More</button>
          </div>
          <div className="right-box">

              

            <div>
              <img src={ImageOneSectionFour} alt="" />
              <div className="image-details">
                <div className="image-card">
                  <h1>01 -- Bed Room</h1>
                  <h2>Inner Peace</h2>
                </div>
                <div className="arrow">
                  <img src={arrowIcon} alt="arrowIcon" />
                </div>
              </div>
              
            </div>

            <div>
              <img src={ImageTwoSectionFour} alt="" />
            </div>
            <div>
              <img src={ImageTwoSectionFour} alt="" />
            </div>
           
            <div>
              <img src={ImageTwoSectionFour} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-five">
        <img src={jugaad} alt="" />
      </div>

      <Footer />

    </div>
  )
}

export default Homepage 