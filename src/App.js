import React from "react";
import axios from "axios"
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movieList: []
  };
  getMovies = async () => {
    const {data: {movieListResult: {movieList}}} = await axios.get(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=805455e7e9e8e37a53bcbd78cfbffac9&targetDt=20201101"
      );
      this.setState({movieList, isLoading: false})
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movieList } = this.state;
  return <div>{isLoading ? "Loading.." : movieList.map(movie =>{
      console.log(movie);
      return (
      <Movie 
        key={movie.movieCd}
        id={movie.movieCd} 
        name={movie.movieNm} 
        year={movie.prdtYear} 
        release={movie.openDt} 
        state={movie.prdtStatNm} 
        nation={movie.nationAlt} 
        genre={movie.genreAlt} 
      />
      );
    })}
    </div>;
  }
}

export default App;
