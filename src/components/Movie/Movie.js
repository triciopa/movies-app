import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <h1 className="title">{this.props.details.Title || 'Title'}</h1>
          <span>{this.props.details.Rated || 'PG-13'}</span>
          <img
            src={
              this.props.details.Poster ||
              'https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
            }
          ></img>
          <p id="director">
            <strong>Director:</strong>{' '}
            {this.props.details.Director || 'Director'}
          </p>
          <p id="year">
            {this.props.details.Type === 'series' ? 'TV series ' : null}
            {this.props.details.Type === 'movie' ? 'Movie ' : null}(
            {this.props.details.Year || 'Movies (2020)'})
          </p>
          <p id="rating">
            Rating:
            <br />
            {this.props.details.imdbRating || '5.0'}
          </p>
          <p id="runtime">
            Duration:
            <br />
            {this.props.details.Runtime || '100 min'}
          </p>
          <p className="description">
            {this.props.details.Plot ||
              'Elit in eu culpa ex qui enim consectetur incididunt ex adipisicing proident sit eiusmod consectetur. Nostrud qui fugiat minim aliquip amet culpa ea deserunt reprehenderit nulla officia anim. Dolor qui quis elit cupidatat consequat sunt cupidatat non voluptate. Laboris adipisicing voluptate nostrud nisi culpa consectetur. Eu non duis labore dolor veniam quis sint.'}
          </p>
          <p id="production">
            {this.props.details.Production || 'Production details'}
          </p>
        </div>
        <div id="back">
          <Link to="/">
            <button>Go back</button>
          </Link>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    details: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
