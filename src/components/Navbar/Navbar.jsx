import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className="app__navbar w-full flex justify-between items-center bg-customBlack py-4 px-8 max-[650px]:p-4">
    <div className="app__navbar-logo flex items-center justify-start">
      <img className="w-[210px] max-[2000px]:w-[150px] max-[650px]:w-[110px]" src={images.gericht} alt="Gericht Logo" />
    </div>
    <ul className="app__navbar-links flex justify-center items-center flex-1 max-[1150px]:hidden">
      <li className="p__opensans mx-4 cursor-pointer hover:text-customGrey"><a href="#home">Home</a></li>
      <li className="p__opensans mx-4 cursor-pointer hover:text-customGrey"><a href="#about">About</a></li>
      <li className="p__opensans mx-4 cursor-pointer hover:text-customGrey"><a href="#menu">Menu</a></li>
      <li className="p__opensans mx-4 cursor-pointer hover:text-customGrey"><a href="#awards">Awards</a></li>
      <li className="p__opensans mx-4 cursor-pointer hover:text-customGrey"><a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login flex justify-end items-center max-[650px]:hidden ">
      <a href="#login" className="p__opensans mx-4 transition-all duration-500 ease-in-out hover:border-b-[1px] hover:border-customGolden hover:border-solid ">Log In / Register</a>
      <div className="w-[1px] h-[30px] bg-customGrey"></div>
      <a href="/" className="p__opensans mx-4 transition-all duration-500 ease-in-out hover:border-b-[1px] hover:border-customGolden hover:border-solid ">Book Table</a>
    </div>
    <div className="app__navbar-smallscreen hidden max-[1150px]:flex">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
      
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay items-center flex justify-center slide-bottom fixed top-0 left-0 w-full h-screen bg-customBlack transition-all duration-500 ease-in-out flex-col z-[5]">
        <MdOutlineRestaurantMenu fontSize={27} className="text-[27px] text-customGolden cursor-pointer absolute top-5 right-5" onClick={() => setToggleMenu(false)} />
        <ul className="app__navbar-smallscreen-links">
          <li className="m-8 cursor-pointer text-[2rem] text-customGolden text-center font-customBase hover:text-customWhite"><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
          <li className="m-8 cursor-pointer text-[2rem] text-customGolden text-center font-customBase hover:text-customWhite"><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
          <li className="m-8 cursor-pointer text-[2rem] text-customGolden text-center font-customBase hover:text-customWhite"><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
          <li className="m-8 cursor-pointer text-[2rem] text-customGolden text-center font-customBase hover:text-customWhite"><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
          <li className="m-8 cursor-pointer text-[2rem] text-customGolden text-center font-customBase hover:text-customWhite"><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
        </ul>
      </div>
      )}

    </div>

  </nav>
)

}

export default Navbar;
