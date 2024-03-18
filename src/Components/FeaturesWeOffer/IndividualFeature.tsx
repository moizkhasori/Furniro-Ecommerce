
const IndividualFeature = ({heading, description, imageUrl}:{heading:string, description:string, imageUrl:string}) => {
  return (
    <div className="IndividualFeature">
        <div className="icon">
            <img src={imageUrl} alt="" />
        </div>
        <div className="text">
            <h1>{heading}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default IndividualFeature