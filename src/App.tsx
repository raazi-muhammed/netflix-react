import { useEffect, useState } from "react";
import APIClient from "./services/APIClient";
import MoviesService from "./services/MoviesService";
import { MovieDBResponse, ResultMediaType } from "./types/moveisServices.types";
import "./index.css";
import MainPoster from "./components/MainPoster";
import SingleMedia from "./components/SingleMedia";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
    const [trending, setTrending] = useState<ResultMediaType[]>([]);
    const [popular, setPopular] = useState<ResultMediaType[]>([]);
    const [singlePreview, setSinglePreview] = useState<ResultMediaType | null>(
        null
    );
    useEffect(() => {
        const moviesService: any = new MoviesService(APIClient);
        moviesService.getTrending().then((li: MovieDBResponse) => {
            console.log(li);
            setTrending(li.results);
            setSinglePreview(li.results[8]);
        });
        moviesService.getPopular().then((li: MovieDBResponse) => {
            console.log(li);
            setPopular(li.results);
        });
    }, []);

    return (
        <main className="w-screen ">
            <NavBar />
            {singlePreview && <MainPoster media={singlePreview} />}
            <p className="font-semibold text-2xl text-white opacity-100 z-40 ps-4 pt-4 ">
                Trending
            </p>

            <section className="flex p-3 w-screen">
                {trending.map((media) => (
                    <SingleMedia media={media} />
                ))}
            </section>

            <p className="font-semibold text-2xl text-white opacity-100 z-40 ps-4 pt-4 ">
                Popular
            </p>
            <section className="flex p-3 w-screen">
                {popular.map((media) => (
                    <SingleMedia media={media} />
                ))}
            </section>
            <Footer />
        </main>
    );
}

export default App;
