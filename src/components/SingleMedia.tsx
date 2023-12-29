import { imageBaseURL } from "../constants/constants";
import { ResultMediaType } from "../types/moveisServices.types";

type Props = { media: ResultMediaType };

const SingleMedia = ({ media }: Props) => {
    return (
        <section className="flex-shrink-0 bg-indigo-100 m-1 ">
            <img src={`${imageBaseURL}/p/w500${media.backdrop_path}`} alt="" />
            <p>{media.name || media.title}</p>
        </section>
    );
};

export default SingleMedia;
