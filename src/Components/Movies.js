import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import MoviePoster from './MoviePoster';
import MoviePopup from "./MoviePopUp";
import { Actions } from "react-native-router-flux";
class Movies extends Component {
    _keyExtractor = (item, index) => index.toString();

    _onPressItem = (item) => {
          console.log(item);
          this.openMovie(item)
    };

    _renderItem = ({item})  => (
         <MoviePoster  movie={item}  onPressItem={this._onPressItem} />
    );
    state = {
        popupIsOpen: false,
        // Day chosen by user
        chosenDay: 0,       // choose first day by default
        // Time chosen by user
        chosenTime: null,
      }

    openMovie = (movie) => {
        this.setState({
            popupIsOpen: true,
            movie,	
        });
    }
    
    closeMovie = () => {
        this.setState({
          popupIsOpen: false,
          // Reset values to default ones
          chosenDay: 0,
          chosenTime: null,
        });
    }
    
    bookTicket = () => {
        if (!this.state.chosenTime) {
          alert('Please select show time');
        } else {
          this.closeMovie();
          Actions.Confirmation();
        }
      }

    render() {
        return (
            <View>
            <FlatList
            data = {this.props.movies}
            numColumns = {3}
            keyExtractor = {this._keyExtractor}
            renderItem = {this._renderItem}
            />    
            <MoviePopup
            movie={this.state.movie}
            isOpen={this.state.popupIsOpen}
            onClose={this.closeMovie}
            onBook={this.bookTicket}
            />
            </View>
        );
    }
}
const makePropsFromState  = (state) => {
    return {movies: state.movies}
}
export default connect(makePropsFromState)(Movies);