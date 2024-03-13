import { useState } from 'react'
import './MovieCard/MovieCard.css'
import { MovieCard } from './MovieCard/MovieCard.jsx'


const movies = [
  {title:"Ponyo and the secret of the little mermaid", date:"13/11/2009", image:"../public/movies/Ponyo.jpg", seen:true},
  {title:"When marnie was there", date:"19/07/2014", image:"../public/movies/Marnie.jpg", seen:true},
  {title:"The wind rises", date:"20/07/2013", image:"../public/movies/WindRises.jpg", seen:false},
  {title:"Whisper of the heart", date:"15/07/1995", image:"../public/movies/Whisper.jpg", seen:true},
  //{title:"Ponyo and the secret of the little mermaid", date:"13/11/2009", image:"../public/movies/Ponyo.jpg", seen:true},
]

function App() {
  const [ischecked, setIsChecked] = useState(true);

  return (
    <>
      <h1> Mi primer componente. </h1>

      <input onChange={() => setIsChecked(!ischecked)} type="checkbox" checked={ischecked}/> Vistas

      {
        ischecked ? movies.filter((film) => film.seen).map((film) => {
          return <MovieCard title={film.title} date={film.date} image= {film.image} seen={film.seen}/>
        }) : movies.filter((film) => !film.seen).map((film) => {
          return <MovieCard title={film.title} date={film.date} image= {film.image} seen={film.seen}/>
        })
      }
    </>
  )
}

export default App
