import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovieDetail, getMovies } from '../../actions';
import './Buscador.css';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="content">
        <h2>Search movies</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{' '}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              placeholder="Find your movies..."
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">🔍</button>
        </form>
        <hr />
        <ul>
          {this.props.movies &&
            this.props.movies.map((movie) => (
              <li>
                <Link
                  to={`/movie/${movie.imdbID}`}
                  onClick={() => this.props.getMovieDetail(movie.imdbID)}
                >
                  {`${movie.Title} (${movie.Year})`}
                </Link>
                <button
                  onClick={() =>
                    this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID,
                    })
                  }
                >
                  ⭐ add to favourites
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
