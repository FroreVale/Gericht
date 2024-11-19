
// eslint-disable-next-line react/prop-types
const MenuItem = ({title, price, tags}) => (
  <div className='app__menuitem w-full my-4 flex flex-col'>
    <div className='app__menuitem-head flex justify-between items-center'>
      <div className='app__menuitem-name flex-1'>
        <p className='p__cormorant' style={{color: "#DCCA87"}}>{title}</p>
      </div>

      <div className='app__menuitem-dash w-[90px] h-[1px] bg-customGolden mx-4'></div>

      <div className='app__menuitem-price flex justify-end items-end'>
        <p className='p__cormorant'>{price}</p>
      </div>

    </div>

    <div className='app__menuitem-sub w-full mt-[0.2rem]'>
      <p className='p__opensans text-[#AAA]'>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
