import { images } from "../../constants";

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding relative' id="about">
    <div className="app__aboutus-overlay flex__center absolute inset-0">
      <img src={images.G} alt="g letter" className="w-[391px] h-[415px] z-0 max-[650px]:w-4/5 max-[650px]:h-[320px]"/>
    </div>

    <div className="app__aboutus-content flex__center w-full z-[2] max-[900px]:flex-col">

      <div className="app__aboutus-content_about flex-1 flex justify-end items-end flex-col text-right">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans my-8 text-customGrey max-[2000px]:my-16">We&apos;re passionate about creating unforgettable dining experiences with exceptional flavors. Every dish is crafted to bring you the best in culinary art.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center my-8 mx-16 max-[900px]:my-16">
        <img src={images.knife} alt="about_knife" className="h-[910px] max-[2000px]:h-[1110px]"/>
      </div>

      <div className="app__aboutus-content_history flex-1 flex flex-col text-left justify-start items-start">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans my-8 text-customGrey max-[2000px]:my-16">Born from a love for great food, we started as a small eatery. Today, we’re a beloved spot for food lovers everywhere.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
