import { useContext } from "react";
// import { ISong } from "../../models/ISong";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import { ISong } from "../../models/ISong";

const MyPlaylist = () => {
  // let's get the data from the context
  const { myPlaylist } = useContext<any>(PlaylistContext);
  console.log(myPlaylist);

  return (
    <div className="col-md-6">
      <h2>My Playlist ({myPlaylist.length})</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {myPlaylist.map((song: ISong) => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-start" key={song.id}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{song.title}</div>
                  <span className="text-muted">Artists: {song.artist}</span>
                  <span className="text-muted ps-2">Duration: {song.duration}</span>
                </div>
                <button className="btn btn-danger btn-sm">-</button>
              </li>
            );
          }) }
          
        </ul>
      </div>
    </div>
  );
};

export default MyPlaylist;
