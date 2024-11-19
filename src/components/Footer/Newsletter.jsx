import { images } from "../../constants";

const Newsletter = () => (
  <div className="app__newsletter py-8 px-16 border border-solid border-customGolden bg-customBlack max-[650px]:py-8 max-[650px]:border-none max-[650px]:border-0">
    <div className="app__newsletter-heading text-center">
      <div className="mb-4">
        <p className="p__cormorant">Newsletter</p>
        <img src={images.spoon} alt="spoon" className="spoon__img mx-auto" />
      </div>
      <h1 className="headtext__cormorant max-[300px]:text-[32px] max-[300px]:leading-[50px]">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest updates</p>
    </div>

    <div className="app__newsletter-input flex__center flex-row mt-12 max-[990px]:flex-col max-[990px]:w-full">
      <input type="email" placeholder="Enter your email address" className="w-[620px] border border-solid border-customGolden rounded-[5px] text-[1rem] font-customBase text-customWhite mr-8 py-3 px-4 bg-customBlack max-[990px]:mb-8 max-[990px]:w-full min-[2000px]:text-[2rem]"/>
      <button className="custom__button w-max">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
