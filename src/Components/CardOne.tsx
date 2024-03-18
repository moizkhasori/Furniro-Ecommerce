


const CardOne = ({heading, imgurl} : {heading:string, imgurl:string}) => {
  return (
    <div className="card">
      <div className="card-img-div">
        <img
          src={imgurl}
          alt={heading}
        />
      </div>
      <h3>{heading}</h3>
    </div>
  );
};

export default CardOne;
