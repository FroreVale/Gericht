import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding flex-col bg-customBlack" id="menu">

    <div className="app__specialMenu-title mb-8 text-center">
      <SubHeading title="Menu that fits you Palatte"/>
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu w-full my-8 flex justify-center items-start flex-row max-[1150px]:flex-col max-[1150px]:items-center max-[1150px]:w-full">

      <div className="app__specialMenu-menu_wine flex__center flex-1 w-full flex-col">
        <p className="app__specialMenu_menu_heading font-customBase font-semibold text-[45px] leading-[58.5px] tracking-[.04em] text-customWhite max-[650px]:text-[35px] max-[650px]:leading-[48.5px]">Wine & Beer</p>
        <div className="app__specialMenu_menu_items flex flex-col my-8 w-full ">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img min-[2001px]:w-[800px] max-[2000px]:w-[550px] w-[410px] mx-8 max-[650px]:w-full max-[1150px]:my-12">
          <img src={images.menu} alt="menu img" className=" w-full h-auto"/>
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center flex-1 w-full flex-col">
        <p className="app__specialMenu_menu_heading font-customBase font-semibold text-[45px] leading-[58.5px] tracking-[.04em] text-customWhite max-[650px]:text-[35px] max-[650px]:leading-[48.5px]">Cocktails</p>
        <div className="app__specialMenu_menu_items flex flex-col my-8 w-full ">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>


    </div>

    <div className="mt-[15px]">
          <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
