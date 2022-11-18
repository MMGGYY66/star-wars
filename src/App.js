import './App.css';
import React from 'react'

class FilmItem extends React.Component {
  render(h) {
    return (
      < li > < a href={
        this.props.url
      }
      target="_blank"
      rel="noreferrer" >{this.props.url}</a></li>
    )
  }
}

class StarWars extends React.Component {
    constructor() {
        super()
        this.state = {
          charactersLoaded: false,
          name: null,
          height: null,
          homeworld: null,
          films: [],
        }
      }
    getNewCharacters() {
      const randNum = Math.floor(Math.random() * 81);

      const url = `https://swapi.dev/api/people/${randNum}/`
      fetch(url).then((response) => response.json())
        .then(data => {
          console.log(data)
        
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          charactersLoaded: true,
        })
      })
    }

  render() {
    const movies = this.state.films.map((url, index) => {
      return <FilmItem key={index} url={url}/>
    })
    return ( 
      <div className="container"> 
        {
          this.state.charactersLoaded &&
          <div>
            < h1 > Name: < span > {
              this.state.name
            } </span></h1 >
            <p>Height: {this.state.height}cm</p> 
            <p><a href={this.state.homeworld
            }
            target = "_blank"
            rel = "noreferrer" > Home World </a></p>
            <ul >
              <h2>Films: </h2>
              {movies}
            </ul >
        </div>
        }
        <button type = "button"
        onClick = {() => this.getNewCharacters()}
        className = "btn" > Get characters </button>
      </div>
    )
  }
}


function App() {
  return ( 
    <div className = "App" >
      <header className = "App-header" >
        <StarWars />
      </header> 
    </div>
  )
  }

export default App;