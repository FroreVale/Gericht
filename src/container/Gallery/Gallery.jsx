import { images } from "../../constants";
import { SubHeading } from "../../components";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import React from "react";

const Gallery = () => { 

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    
    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  
 return ( <div className="app__gallery flex flex-row bg-customBlack py-16 pl-24 flex__center max-[1150px]:flex-col max-[850px]:py-16 max-[850px]:pl-16 max-[650px]:pl-8 max-[650px]:py-16">
    <div className="app__gallery-content flex-1 flex justify-center items-start flex-col min-w-[500px] pr-8 min-[2000px]:min-w-[1000px] min-[2000px]:pr-16 max-[650px]:min-w-full">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{color: '#AAA', marginTop: '2rem'}}>Explore our photo gallery and immerse yourself in the vibrant flavors and ambiance of our restaurant, discovering the essence of our dining experience through a seamless collection of stunning images.</p>
      <button type="button" className="custom__button mt-4">View More</button>
    </div>

    <div className="app__gallery-images flex-1 flex flex-row max-w-[50%] relative max-[1150px]:max-w-full max-[1150px]:my-20">
      <div className="app__gallery-images_container flex flex-row w-max overflow-x-scroll hide-scrollbar" ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className="app__gallery-images_card group relative min-w-[301px] h-[447px] mr-8 flex__center min-[2000px]:h-[550px] min-[2000px]:min-w-[400px] max-[650px]:min-w-[240px] max-[650px]:h-[320px]" key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery img" className="group-hover:opacity-35 w-full h-full object-cover opacity-100 transition-all duration-500 ease-in-out"/>
            <BsInstagram className="gallery__image-icon group-hover:opacity-100 cursor-pointer absolute text-[#fff] text-[2rem] opacity-0 transition-all duration-500 ease-in-out" />
          </div>
        ))}
      </div>

      <div className="app__gallery-images_arrow w-full flex justify-between items-center px-4 absolute bottom-[5%]">
        <BsArrowLeftShort className="gallery__arrow-icon hover:text-customWhite bg-customBlack rounded-[5px] text-customGolden text-[2rem] cursor-pointer" onClick={() => scroll('left')}/>
        <BsArrowRightShort className="gallery__arrow-icon hover:text-customWhite bg-customBlack rounded-[5px] text-customGolden text-[2rem] cursor-pointer" onClick={() => scroll('right')}/>
      </div>
    </div>
  </div> 
  );

}

export default Gallery;
