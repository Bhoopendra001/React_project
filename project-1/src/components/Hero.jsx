const HeroSection = () => {

    return <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
                 </div>

                 <div className="Shopping">
                    <p>Also Available on</p>
                    <div className="brand-icons">
                    <a href="https://www.amazon.com" target="_blank">
                        <img src="Images/amazon.png" alt="amazon-logo" />
                        </a>
                        <a href="https://www.amazon.in" target="_blank">
                        <img src="Images/flipkart.png" alt="flipkart-logo" />
                        </a>
                    </div>
                </div>

        </div>
        <div className="hero-image">
        <img src="Images/shoe_image.png" alt="shoe_image" />
        </div>
    </main>

}
export default HeroSection;