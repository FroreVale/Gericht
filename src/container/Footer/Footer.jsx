import { FooterOverlay, Newsletter } from "../../components";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding w-full relative z-[1] flex justify-start items-center flex-col bg-customBlack pt-0 max-[650px]:pb-8">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links w-full flex justify-between items-start mt-20 px-8 max-[1150px]:items-center max-[1150px]:flex-col max-[1150px]:p-0">
      <div className="app__footer-links_contact flex-1 m-4 text-center max-[1150px]:my-8 max-[1150px]:w-full">
        <h1 className="app__footer-headtext font-customBase text-customWhite font-normal tracking-[.04em] capitalize text-[32px] leading-[41.6px] mb-4 min-[2000px]:text-[51px] min-[2000px]:leading-[61px]">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo flex-1 m-4 text-center max-[1150px]:my-8 max-[1150px]:w-full">
        <img src={images.gericht} alt="footer_logo" className="w-[210px] mb-3 mx-auto max-[350px]:w-4/5"/>
        <p className="p__opensans">The best way to find yourself is to lose yourself in the service of others.</p>
        <img src={images.spoon} alt="spoon" className="spoon__img mx-auto" style={{marginTop: "15px"}} />
        <div className="app__footer-links_icons mt-2 flex justify-center">
          <FiFacebook className="text-customWhite m-2 text-[24px] cursor-pointer hover:text-customGolden"/>
          <FiInstagram className="text-customWhite m-2 text-[24px] cursor-pointer hover:text-customGolden"/>
          <BsTwitterX className="text-customWhite m-2 text-[24px] cursor-pointer hover:text-customGolden"/>
        </div>
      </div>
      <div className="app__footer-links_work flex-1 m-4 text-center max-[1150px]:my-8 max-[1150px]:w-full">
        <h1 className="app__footer-headtext font-customBase text-customWhite font-normal tracking-[.04em] capitalize text-[32px] leading-[41.6px] mb-4 min-[2000px]:text-[51px] min-[2000px]:leading-[61px]">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans mb-4">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans mb-4">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright mt-12">
      <p className="p__opensans">{new Date().getFullYear()} Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
