import { imageBaseURL } from "../constants/constants";
import { ResultMediaType } from "../types/moveisServices.types";
import { IoPlay } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = { media: ResultMediaType };

const SingleMedia = ({ media }: Props) => {
    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <motion.section
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2, y: -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={() => setShowMore(true)}
            onMouseLeave={() => setShowMore(false)}
            className={`w-96 flex-shrink-0 flex-grow-0 m-1 text-white rounded-xl  ${
                showMore ? "z-40" : ""
            }`}
        >
            <img
                className="rounded-t-xl"
                src={`${imageBaseURL}/p/w500${media.backdrop_path}`}
                alt=""
            />
            {showMore ? (
                <section className="absolute top-44 z-50 w-full p-4 text-ellipsis space-y-2 bg-slate-800 rounded-b-xl">
                    <p className="text-lg font-semibold">
                        {media.name || media.title}
                    </p>
                    <section className="flex justify-between">
                        <div className="flex gap-3">
                            <button className="bg-white text-slate-800 aspect-square p-4 rounded-full">
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
