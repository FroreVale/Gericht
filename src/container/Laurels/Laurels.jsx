import { images, data } from "../../constants";
import { SubHeading } from "../../components";

// eslint-disable-next-line react/prop-types
const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className="app__laurels_awards-card max-[450px]:min-w-full max-[450px]:my-4 flex-1 flex justify-start items-start min-w-[230px] m-4 min-[1900px]:min-w-[390px]">
    <img src={imgUrl} alt="award" className="w-[50px] h-[50px]"/>
    <div className="app__laurels_awards-card_content flex flex-col ml-4">
      <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards flex justify-start items-center flex-wrap mt-12 ">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
