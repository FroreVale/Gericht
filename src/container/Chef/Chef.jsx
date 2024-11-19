import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content flex flex-col w-full mt-20">
        <div className="app__chef-content_quote flex justify-start items-end">
          <img src={images.quote} alt="quote" className="w-[47px] h-[40px] mr-4 mb-4" />
          <p className="p__opensans ">We craft every dish with love, passion, and precision. Our culinary artistry reflects our commitment to heartfelt hospitality.</p>
        </div>
        <p className="p__opensans">Every ingredient is carefully chosen to ensure the finest quality. Our team believes in creating flavors that leave lasting memories. At our core, we strive to make every dining experience extraordinary.</p>
      </div>

      <div className="app__chef-sign w-full mt-12">
        <p className="font-customBase font-normal text-[32px] leading-[41px] tracking-[.04em] capitalize text-customGolden">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" className="w-[250px] mt-12 max-[2000px]:w-[370px] max-[450px]:w-4/5"/>
      </div>

    </div>
  </div>
);

export default Chef;
