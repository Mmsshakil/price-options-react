import { AiOutlineCheckSquare } from "react-icons/ai";

const Features = ({ feature }) => {
    return (
        <p className="flex items-center gap-1">
            <span><AiOutlineCheckSquare></AiOutlineCheckSquare></span>
            <span>{feature}</span>
        </p>
    );
};

export default Features;