import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import AddMovie from "./Components/AddMovie/AddMovie";

import React, { useState } from "react";

function App() {
    const [movies, setMovies] = useState([
        {
            title: "Zombie Land 2",
            description:
                "Ten years after their adventure at Zombieland, survivors Tallahassee, Columbus, Wichita and Little Rock embark on a mission to slay evolved zombies while struggling with their emotional battles.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/I/91h0AVhCIlL._RI_.jpg",
            rate: 5,
        },
        {
            title: "Star Wars: The Rise of Skywalker (Episode IX)",
            description:
                "The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/I/91vkH4q7ZPL.jpg",
            rate: 5,
        },
        {
            title: "Godzilla: King of the Monsters",
            description:
                "The members of Monarch, an crypto-zoological organisation, must rely on the Godzilla and Mothra to defeat King Ghidorah and Rodan, after the former awakens other dormant Titans to destroy the world.",
            posterUrl:
                "https://assets.mycast.io/posters/godzilla-kotm-fan-casting-poster-75339-large.jpg?1609749256",
            rate: 4,
        },
        {
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rate: 3,
        },
        {
            title: "Avengers: Endgame",
            description:
                "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
            posterUrl:
                "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
            rate: 4,
        },
        {
            title: "Jumanji",
            description:
                "Jumanji is a 1995 American fantasy adventure film directed by Joe Johnston. It is loosely based on the 1981 children's book by Chris Van Allsburg and the first installment of the Jumanji franchise.",
            posterUrl:
                "https://radradio.com/wp-content/uploads/jumanji-next-level-951x548.jpg",
            rate: 4,
        },
        {
            title: "Frozen 2",
            description:
                "Queen Elsa starts hearing a mysterious melodic voice calling to her. Unsettled, she answers it and that awakens the elemental spirits that lead her to a quest to restore an old injustice.",
            posterUrl:
                "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZnMkefnbsUltkaasANJl0h0xi7xgEBFTjL42-Z5UtNWBHi8DO",
            rate: 3,
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            description:
                "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
            rate: 4,
        },
        {
            title: "Joker",
            description:
                "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks ",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD",
            rate: 4,
        },
        {
            title: "1917",
            description:
                "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
            posterUrl:
                "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9KHHcZ77V9cPmxm5b0yAjefFIqgQU4uB13lLIGXU8Jvbr8xIs",
            rate: 2,
        },
    ]);
    const [searchRate, setSearchRate] = useState(0);
    const [searchTitle, setSearchTitle] = useState("");

    const getSearchRate = (input) => {
        setSearchRate(input);
    };

    const getSearchTitle = (input) => {
        setSearchTitle(input);
    };

    const getNewMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };
    return (
        <div className="App">
            <MyNavBar
                getSearchRate={getSearchRate}
                getSearchTitle={getSearchTitle}
            />
            <div className="addMovieBtn">
                <AddMovie getNewMovie={getNewMovie} />
            </div>
            <MovieList
                movies={movies}
                searchRate={searchRate}
                searchTitle={searchTitle}
            />
        </div>
    );
}

export default App;
