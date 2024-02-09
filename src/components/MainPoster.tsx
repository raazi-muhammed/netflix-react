import { ResultMediaType } from "../types/moveisServices.types";
import { imageBaseURL } from "../constants/constants";
import { IoPlay } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import moment from "moment";
import Container from "./Container";

type Props = { media: ResultMediaType };

const MainPoster = ({ media }: Props) => {
    return (
        <section className="w-screen h-screen object-cover ">
            <div className="absolute bg-gradient-to-r from-black opacity-50 w-screen h-screen z-10 pointer-events-none overflow-clip"></div>
            <img
                className="h-full w-full object-cover bg-center"
                src={`${imageBaseURL}/p/original${media.backdrop_path}`}
                alt=""
            />
            <Container>
                <section className="p-4 grid place-items-center absolute top-0 h-screen z-30 text-white max-w-md">
                    <div className="space-y-3">
                        <p className="font-semibold text-5xl">
                            {media.name || media.title}
                        </p>

                        <section className="flex gap-4">
                            <p className="border px-2 py-0 rounded">
                                {media.adult ? "R" : "PG-13"}
                            </p>
                            <p>{`${moment(media.release_date).format("LL")} (${
                                media.original_language
                            })`}</p>
                        </section>
                        <p className="opacity-85">{media.overview}</p>
                        <section className="flex gap-2">
                            <button className="bg-white text-slate-800 px-4 py-2 rounded flex">
                                <IoPlay size="1.2em" className="my-auto me-1" />
                                <span>Watch Now</span>
                            </button>
                            <button className="bg-slate-700 bg-opacity-50 px-4 py-2 rounded flex">
                                <IoInformationCircleOutline
                                    size="1.3em"
                                    className="my-auto me-1"
                                />
                                <span>More info</span>
                            </button>
                        </section>
                    </div>
                </section>
            </Container>
        </section>
    );
};

export default MainPoster;
