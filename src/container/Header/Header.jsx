import {images} from '../../constants'
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding bg-customBlack' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1 font-customBase text-customGolden tracking-[.04em] uppercase leading-[117px] text-[90px]'>The Key to Fine Dining</h1>
      <p className='p__opensans my-8'>Experience a culinary journey where exquisite flavors meet artful presentation. Indulge in dishes crafted with passion and precision, perfect for every discerning palate.</p>
      <button type='button' className='custom__button'>Expore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" className='w-4/5' />
    </div>
  </div>
);

export default Header;
