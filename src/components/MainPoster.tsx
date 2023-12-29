import { ResultMediaType } from "../types/moveisServices.types";
import { imageBaseURL } from "../constants/constants";

type Props = { singlePreview: ResultMediaType };

const MainPoster = ({ singlePreview }: Props) => {
    return (
        <section className="w-screen h-screen border">
            <img
                className="h-full object-cover"
                src={`${imageBaseURL}/p/original${singlePreview.backdrop_path}`}
                alt=""
            />
        </section>
    );
};

export default MainPoster;
