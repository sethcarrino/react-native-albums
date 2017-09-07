import React, { Component } from 'react';
import { ScrollView } from 'react-native';

// for api fetch requests
import axios from 'axios';

// importing Albim Detail
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  // lifecycle method - automatically get called when rendered
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
