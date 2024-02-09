import { useEffect, useState } from "react";
import APIClient from "./services/APIClient";
import MoviesService from "./services/MoviesService";
import { MovieDBResponse, ResultMediaType } from "./types/moveisServices.types";
import "./index.css";
import MainPoster from "./components/MainPoster";
import SingleMedia from "./components/SingleMedia";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import YouTube from "react-youtube";

function App() {
    const [trending, setTrending] = useState<ResultMediaType[]>([]);
    const [popular, setPopular] = useState<ResultMediaType[]>([]);
    const [mainPreviewId, setMainPreviewId] = useState<number | null>(91363);
    const [singlePreview, setSinglePreview] = useState<ResultMediaType | null>(
        null
    );

    useEffect(() => {
        const moviesService: any = new MoviesService(APIClient);
        moviesService
            .getSingleMediaDetails(mainPreviewId)
            .then((data: ResultMediaType) => {
                setSinglePreview(data);
                console.log(data);
            });

        moviesService.getTrailer(mainPreviewId).then((da: any) => {
            console.log(da);
        });
    }, [mainPreviewId]);

    useEffect(() => {
        const moviesService: any = new MoviesService(APIClient);
        moviesService.getTrending().then((li: MovieDBResponse) => {
            setTrending(li.results);
            setMainPreviewId(li.results[0].id);
        });

        moviesService.getPopular().then((li: MovieDBResponse) => {
            console.log(li);
            setPopular(li.results);
        });
    }, []);

    return (
        <div className="w-screen ">
            <NavBar />
            <main>
                {singlePreview && <MainPoster media={singlePreview} />}
                <Heading>Trending</Heading>
                <section className="flex p-3 w-screen h-96 overflow-auto align-middle -my-16">
                    {trending.map((media) => (
                        <SingleMedia
                            setMainPreviewId={setMainPreviewId}
                            media={media}
                        />
                    ))}
                </section>

                <Heading>Popular</Heading>

                <section className="flex p-3 w-screen h-96 overflow-auto align-middle -my-16">
                    {popular.map((media) => (
                        <SingleMedia
                            setMainPreviewId={setMainPreviewId}
                            media={media}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
