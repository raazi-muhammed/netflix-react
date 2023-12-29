import { useEffect, useState } from "react";
import { baseURL, imageBaseURL } from "./constants/constants";
import APIClient from "./services/APIClient";
import MoviesService from "./services/MoviesService";
import { MovieDBResponse, ResultMediaType } from "./types/moveisServices.types";
import "./index.css";
import MainPoster from "./components/MainPoster";
import SingleMedia from "./components/SingleMedia";
import NavBar from "./components/NavBar";

function App() {
    const [data, setData] = useState<ResultMediaType[]>([]);
    const [singlePreview, setSinglePreview] = useState<ResultMediaType | null>(
        null
    );
    useEffect(() => {
        const moviesService: any = new MoviesService(APIClient);
        moviesService.getTrending().then((li: MovieDBResponse) => {
            console.log(li);
            setData(li.results);
            setSinglePreview(li.results[8]);
        });
    }, []);

    return (
        <main className="w-screen ">
            <div className="bg-gradient-to-b from-black opacity-75 w-screen h-screen fixed z-10"></div>
            <NavBar />
            {singlePreview && <MainPoster singlePreview={singlePreview} />}
            <section className="flex overflow-auto">
                {data.map((media) => (
                    <SingleMedia media={media} />
                ))}
            </section>
        </main>
    );
}

export default App;
