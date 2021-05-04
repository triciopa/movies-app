import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { removeArticle } from '../../actions/index';
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from '../../actions';
import './Favorites.css';

export class ConnectedList extends Component {
  render() {
    return (
      <div className="favs">
        <h2>Favourites Movies</h2>
        <ul>
          {this.props.favMovies &&
            this.props.favMovies.map((movie) => (
              <li>
                {movie.title}
                <button
                  onClick={() => this.props.removeMovieFavorite(movie.id)}
                >
                  ✘
                </button>
              </li>
            ))}
        </ul>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favMovies: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (movie) => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
