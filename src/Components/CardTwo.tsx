
const CardTwo = ({heading,description,price, imgurl} : {heading:string,description:string,price:number, imgurl:string}) => {
  return (
    <div className="card-two">
      <div className="card-img-div">
        <img
          src={imgurl}
          alt={heading}
        />
      </div>
      <div className="card-details">
        <h3>{heading}</h3>
        <p>{description}</p>
        <h3>{`Rs ${price}`}</h3>
      </div>
    </div>
  )
}

export default CardTwo