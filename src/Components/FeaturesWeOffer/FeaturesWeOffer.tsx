import HighQualityIcon from "../../assets/icons/Trophee1Icon.png"
import WarrantyIcon from "../../assets/icons/Warranty2icon.png"
import FreeShipingIcon from "../../assets/icons/FreeShiping3Icon.png"
import SupportIcon from "../../assets/icons/CustomerSupport4Icon.png"
import IndividualFeature from "./IndividualFeature"


const FeaturesWeOffer = () => {
  return (
    <div className="FeaturesWeOffer">
        <div className="wrapperdiv">
            <IndividualFeature heading="High Quality" description="crafted from top materials" imageUrl={HighQualityIcon}/>
            <IndividualFeature heading="Warranty Protection" description="Over 2 years" imageUrl={WarrantyIcon}/>
            <IndividualFeature heading="Free Shiping" description="Order over $150" imageUrl={FreeShipingIcon}/>
            <IndividualFeature heading="24/7 Support" description="Dedicated support" imageUrl={SupportIcon}/>

        </div>
    </div>
  )
}

export default FeaturesWeOffer