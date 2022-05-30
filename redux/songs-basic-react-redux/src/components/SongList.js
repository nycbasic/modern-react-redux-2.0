import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  const renderList = () => {
    const { songs, selectSong } = props;
    return songs.map((song, i) => {
      return (
        <div key={i} className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

function mapStateToProps(state) {
  return {
    songs: state.songs,
  };
}

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
