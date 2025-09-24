import './App.css';
import Naruto from './assets/Naruto image.jpg'
import DragonBallZ from './assets/Dragon Ball Z.jpg'
import OnePiece from './assets/One Piece image.png'
import Bleach from './assets/Bleach image.jpg'
import AttackOnTitan from './assets/Attack on Titan image.jpg'
import DeathNote from './assets/Death Note image.jpg'
import Pokemon from './assets/Pokemon image.jpg'
import YuGiOh from './assets/Yu-Gi-Oh! image.jpg'
import MobPsycho100 from'./assets/Mob Psycho 100 images.jpg'
import MyHeroAcademia from'./assets/My Hero Academia image.jpg'
const Card = ({ title, genre, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{genre}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="card-button"
      >
        View Details
      </a>
    </div>
  );
};


const App = () => {
  return (
    <div className="App">
      <h1>Anime Series Community</h1>
      <h5>Explore your Favorite Anime Series</h5>

      {/* ✅ Card goes inside the container */}
      <div className="card-container">
          <Card
            title="Naruto"
            genre="Action, Adventure, Fantasy, Martial Arts, Drama, and Comedy"
            /* This img was from https://www.pinterest.com/pin/naruto-logo--635429828676844461/*/
            image={Naruto}
            /* This link was from https://www.viz.com/naruto */
            link="https://www.viz.com/naruto"
          /> 
          <Card
            title="Dragon Ball Z"
            genre="Action, Adventure, Martial Arts, Science Fiction, and Supernatural Fantasy"
            /* This image was from https://www.imdb.com/title/tt0121220/ */
            image={DragonBallZ}
            /* This link was from https://en.dragon-ball-official.com/ */
            link="https://en.dragon-ball-official.com/"
          />
          <Card
            title="One Piece"
            genre="Action, Adventure, Science Fiction, and Fantasy Comedy"
            /* This image is from https://logos-world.net/one-piece-logo/ */
            image={OnePiece}
            /*This link is from https://one-piece.com/op/links_eng/ */
            link="https://one-piece.com/op/links_eng/"
          />
          <Card
            title="Bleach"
            genre="Adventure, Supernatural, and Martial Arts"
            /*This img is from https://www.imdb.com/title/tt0434665/ */
            image={Bleach}
            /*This link is from https://www.viz.com/bleach*/
            link="https://www.viz.com/bleach"
          />
          <Card
            title="Attack On Titan"
            genre="Action, Dark Fantasy, Horror, Drama, psyhological, and Post-Apocalyptic"
            /*This img is from https://www.imdb.com/title/tt2560140/*/
            image={AttackOnTitan}
            /*This link is from https://en.wikipedia.org/wiki/Attack_on_Titan */
            link="https://en.wikipedia.org/wiki/Attack_on_Titan"
          />
          <Card
            title="Death Note"
            genre="Psychological thriller, Mystery, Fantasy, and Supernatural"
            /*This img is from https://www.imdb.com/title/tt0877057/ */
            image={DeathNote}
            /*This link is from https://www.viz.com/death-note*/
            link="https://www.viz.com/death-note"
          />
          <Card
            title="Pokemon"
            genre="Adventure, Comedy, and Fantasy"
            /*This img is from https://www.imdb.com/title/tt0168366/ */
            image={Pokemon}
            /*This link is from https://www.pokemon.com/us */
            link="https://www.pokemon.com/us"
          />
          <Card
            title="Yu-Gi-Oh!"
            genre="Game, Adventure, Fantasy, and Science Fiction"
            /*This img is from https://www.amazon.com/Yu-Gi-Oh-Bonds-Beyond-Time-Charles/dp/B0CC7W961Z*/
            image={YuGiOh}
            /*This link is from https://www.yugioh.com/*/
            link="https://www.yugioh.com/"
          />
          <Card
            title="Mob Psycho 100"
            genre="Action, Supernatural, and Comedy"
            /*This img is from https://www.primevideo.com/detail/Mob-Psycho-100/0U3TA8SOFL6VTAQ1E1QSC0SA6D*/
            image={MobPsycho100}
            /*This link is from https://en.wikipedia.org/wiki/Mob_Psycho_100*/
            link="https://en.wikipedia.org/wiki/Mob_Psycho_100"
          />
          <Card
            title="My Hero Academia"
            genre="Action, Science Fiction, Superhero, and Adventure"
            /*This img is from  https://www.amazon.com/Academia-Season-Original-Japanese-Version/dp/B0D329C8WB*/
            image={MyHeroAcademia}
            /*This link is from https://www.imdb.com/title/tt5626028/ */
            link="https://www.imdb.com/title/tt5626028/"
          />
          
        </div>
      </div>
  );
};

export default App;

