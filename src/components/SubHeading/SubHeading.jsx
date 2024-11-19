import { images } from "../../constants";

// eslint-disable-next-line react/prop-types
const SubHeading = ({title}) => (
  <div className="mb-4">
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
