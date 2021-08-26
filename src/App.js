import "./styles.css";
import { useState } from "react";

const movieDictionary = {
  "psychological-thriller": [
    {
      name: "Inception (2010)",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      rating: 8.8
    },
    {
      name: "Shutter Island (2010)",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
      rating: 8.2
    },
    {
      name: "The sixth sense (1999)",
      description:
        "Malcolm Crowe, a child psychologist, starts treating a young boy who acts as a medium of communication between the former and a slew of unhappy spirits.",
      rating: 8.1
    },
    {
      name: "Purge (2013)",
      description:
        "Adela and her husband, Juan, live in Texas, where he works as a ranch hand for the wealthy Tucker family. Juan impresses the Tucker patriarch, Caleb, but that fuels the jealous anger of his son, Dylan.",
      rating: 8.0
    },
    {
      name: "Source Code (2011)",
      description:
        "Army pilot Stevens, recruited for a top-secret operation, finds himself in the body of an unknown man. Soon, he is on a mysterious trail to track down the bomber of the Chicago commuter train.",
      rating: 7.9
    }
  ],
  Entertainment: [
    {
      name: "The prestige (2006)",
      description:
        "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
      rating: 8.2
    },
    {
      name: "Gladiator (2000)",
      description:
        "Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.",
      rating: 8.5
    },
    {
      name: "House of Mouse (2001)",
      description: "Disney characters meet at a cartoon club.",
      rating: 7.5
    }
  ],
  SciFi: [
    {
      name: "Free Guy (2021)",
      description:
        "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
      rating: 8.9
    },
    {
      name: "Loki (2021)",
      description:
        "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
      rating: 8.5
    },
    {
      name: "The tomorrow war (2021)",
      description:
        "The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war against a deadly alien species.",
      rating: 6.6
    },
    {
      name: "Lost (2010)",
      description:
        "The survivors of a plane crash find themselves stranded on a mysterious island. They are forced to work together for their survival when they realise that they are not alone on the island.",
      rating: 8.3
    }
  ]
};

const movieGenres = Object.keys(movieDictionary);

export default function App() {
  const [movieRecommendation, setMovieRecommendation] = useState([]);

  function showMovies(genre) {
    setMovieRecommendation(
      movieDictionary[genre].map((movie, index) => {
        return (
          <div key={index} className="movie">
            <h3>{movie.name}</h3>
            <p>{movie.description}</p>
            <strong>Rating {movie.rating}</strong>
          </div>
        );
      })
    );
  }

  return (
    <div className="App">
      <h1>
        {" "}
        <span>🎥</span> Movie Recommendation
      </h1>
      <p>My favourite Movie Recommendation to watch</p>
      {movieGenres.map((genre) => {
        return (
          <div
            key={genre}
            className="movie-genre"
            onClick={() => showMovies(genre)}
          >
            {genre}
          </div>
        );
      })}
      <div class="movie-container">{movieRecommendation}</div>
    </div>
  );
}
