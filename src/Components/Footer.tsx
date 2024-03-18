

const Footer = () => {
  return (
    <div className="main-footer-div">
        <div className="wrapper-div">

            <div className="above-footer">

                <div className="grid-item-one">
                    <h1>Funiro.</h1>
                    <div>
                        <p>400 university drive suite 200 caral globes</p>
                        <p>FL 33134 USA</p>
                    </div>
                </div>

                <div className="grid-item-two">
                    <h1>Links</h1>
                    <div>
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div className="grid-item-three">
                    <h1>Help</h1>
                    <div>
                        <a href="">Payment Options</a>
                        <a href="">Returns</a>
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
                <div className="grid-item-four">
                    <h1>Newsletter</h1>
                    <div>
                        <input type="text" placeholder="Enter your Email Address" />
                        <span>SUBSCRIBE</span>
                    </div>
                </div>

            </div>


            <div className="below-copyright">
                <h3>2023 furino. All rights reverved</h3>
            </div>

        </div>
    </div>
  )
}

export default Footer