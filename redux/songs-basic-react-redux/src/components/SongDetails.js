import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Select a Song!</div>;
  }
  const { title, duration } = song;
  return (
    <div>
      <h3>Details for</h3>
      <p>Title: {title}</p>
      <p>Duration: {duration}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    song: state.selectedSongKey,
  };
}

export default connect(mapStateToProps)(SongDetails);
