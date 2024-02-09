import { imageBaseURL } from "../constants/constants";
import { ResultMediaType } from "../types/moveisServices.types";
import { IoPlay } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import APIClient from "../services/APIClient";
import MoviesService from "../services/MoviesService";

type Props = {
    media: ResultMediaType;
    setMainPreviewId: React.Dispatch<
        React.SetStateAction<number | null>
    > | null;
};

const SingleMedia = ({ media, setMainPreviewId }: Props) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [playTrailer, setPlayTrailer] = useState<boolean>(false);
    const [trailerId, setTrailerId] = useState("");
    useEffect(() => {
        const moviesService: any = new MoviesService(APIClient);

        moviesService.getTrailer(media.id).then((da: any) => {
            setTrailerId(da);
        });
    }, [showMore]);

    return (
        <motion.section
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, y: -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={() => setShowMore(true)}
            onMouseLeave={() => {
                setShowMore(false);
                setPlayTrailer(false);
            }}
            onClick={() => {
                console.log(media.id);
                if (setMainPreviewId) {
                    setMainPreviewId(media.id);
                }
            }}
            className={`w-96 flex-shrink-0 flex-grow-0 m-1 text-white rounded-xl my-auto ${
                showMore ? "z-40 relative" : ""
            }`}
        >
            {playTrailer ? (
                <div className="w-full aspect-video rounded-xl p-0 m-0">
                    <YouTube
                        className="aspect-video object-cover top-0 h-36 w-full rounded-xl"
                        videoId={trailerId}
                        opts={{
                            width: "100%",
                            height: "200px",
                            playerVars: {
                                // https://developers.google.com/youtube/player_parameters
                                autoplay: 1,
                                controls: 0,
                                modestbranding: 1,
                                showinfo: 0,
                                wmode: "transparent",
                                loop: 1,
                            },
                        }}
                    />
                </div>
            ) : (
                <img
                    className="rounded-xl"
                    src={`${imageBaseURL}/p/w500${media.backdrop_path}`}
                    alt=""
                />
            )}

            {showMore ? (
                <section className="absolute top-44 z-50 w-full p-4 text-ellipsis space-y-2 bg-slate-800 rounded-b-xl">
                    <p className="text-lg font-semibold">
                        {media.name || media.title}
                    </p>
                    <section className="flex justify-between">
                        <div className="flex gap-3">
                            <button
                                onClick={() => setPlayTrailer(true)}
                                className="bg-white text-slate-800 aspect-square p-4 rounded-full"
                            >
                                <IoPlay size="1em" />
                            </button>
                            <button className="bg-slate-800 text-white border-2 border-slate-400 aspect-square p-4 rounded-full">
                                <IoAdd size="1em" />
                            </button>
                        </div>
                        <button className="bg-slate-800 text-white border-2 border-slate-400 aspect-square p-4 rounded-full">
                            <SlLike size="1em" />
                        </button>
                    </section>
                    <section className="flex gap-4">
                        <p
                            className={`text-lg font-semibold ${
                                media.vote_average > 7
                                    ? "text-green-500"
                                    : "text-yellow-500"
                            }`}
                        >
                            {Math.round(media.vote_average * 10)}% Match
                        </p>
                        <p className="border px-2 py-0 rounded opacity-60">
                            {media.adult ? "R" : "PG-13"}
                        </p>
                    </section>
                </section>
            ) : null}
        </motion.section>
    );
};

export default SingleMedia;
