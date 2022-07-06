import React, { Component } from 'react'
import { matchRoutes } from 'react-router-dom'
import {movies} from '../MovieData'
import axios from "axios";
let s=""
export class Banner extends Component {
  constructor() {
    console.log("construtor first");
    super();

    this.state = {
      
      movieset: [],
      currPage: Math.floor(Math.random()*54)+1,
     
    };
  }
  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${this.state.currPage}`
    );
    let movieData = res.data;
    console.log(movieData);

    this.setState({
      movieset: [...movieData.results],
    });

    console.log("mounting done with CDM third");
  }
  change=async()=> {
    movies=[...this.state.movieset]
    

  }
  render() {
    this.change()
    let moviesElem=movies.results[(Math.floor(Math.random()*10)+2)]
    let backDrop =  moviesElem.backdrop_path
    let namemov=moviesElem.title
    return (

        <div className="banner-card" >
        <img src={`https://image.tmdb.org/t/p/original${backDrop}`} className="card-img-top banner-img" alt="..."/>
       
          <h5 className="banner-title" >{namemov}</h5>
          {/* <p className="banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      
    )
  }
}

export default Banner