import React, { useState } from "react";
import "./App.css";

const artworks = [
  {
    title: "Starry Night",
    image: "/assets/7.png",
    description:
    `Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."`
  },
  {
    title: "girl with a Pearl earring",
    image: "/assets/6.png",
    description:
    `The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.`
  },
  {
    title: "Guernica",
    image: "/assets/1.png",
    description:
    `The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.`
  },
  {
    title: "Penitent Magdalene",
    image: "/assets/2.png",
    description:
    `Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy. `
  },
  {
    title: "The Storm On The Sea Of Galilee",
    image: "/assets/5.png",
    description:
    `The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.`

  },
  {
    title: "The Great Wave Off Kanagawa",
    image: "/assets/4.png",
    description:
      `The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background. `,
  },
  {
    title: "Van Gogh Self-Portrait",
    image: "/assets/3.png",
    description:
      "A self-portrait of Vincent van Gogh, capturing his introspection and artistry.",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isFullImage, setIsFullImage] = useState(false);

  const showDetails = (index) => {
    setCurrentIndex(index);
  };

  const closeDetails = () => {
    setCurrentIndex(null);
  };

  const showFullImage = () => {
    setIsFullImage(true);
  };

  const closeFullImage = () => {
    setIsFullImage(false);
  };

  const showPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showNext = () => {
    if (currentIndex < artworks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="app">
      {currentIndex === null ? (
        <div className="gallery">
          {artworks.map((art, index) => (
            <div
              key={index}
              className="artwork"
              onClick={() => showDetails(index)}
            >
              <img src={art.image} alt={art.title} />
              <h2>{art.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="details">
          <button className="close-btn" onClick={closeDetails}>
            Close
          </button>
          <div className="details-content">
            <img
              className="details-image"
              src={artworks[currentIndex].image}
              alt={artworks[currentIndex].title}
              onClick={showFullImage}
            />
            <div className="details-text">
              <h1>{artworks[currentIndex].title}</h1>
              <p>{artworks[currentIndex].description}</p>
            </div>
          </div>
          <div className="arrows">
            <button className="arrow" onClick={showPrevious}>
              Previous
            </button>
            <button className="arrow" onClick={showNext}>
              Next
            </button>
          </div>
        </div>
      )}

      {isFullImage && (
        <div className="full-image" onClick={closeFullImage}>
          <img
            src={artworks[currentIndex].image}
            alt={artworks[currentIndex].title}
          />
          <button className="close-full-image" onClick={closeFullImage}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
