import AudioTracks from "../components/spotify/AudioTracks";
import MyPlaylist from "../components/spotify/MyPlaylist";
import { PlaylistContextProvider } from "../contexts/PlaylistContext";

const Spotify = () => {
  return (
    <div>
      <h1>Spotify Clone</h1>

      <div className="row">
        <PlaylistContextProvider>
          <AudioTracks />

          <MyPlaylist />
        </PlaylistContextProvider>
      </div>
    </div>
  );
};

export default Spotify;
