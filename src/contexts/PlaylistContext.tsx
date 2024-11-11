//  Step 1. Create a new context  in contexts/PlaylistContext.tsx 
import { createContext, ReactNode, useState } from "react";
import { ISong } from "../models/ISong";

// type of data we supply thru the context
interface IPlaylistContext {
  myPlaylist: ISong[];
  setMyPlaylist: React.Dispatch<React.SetStateAction<ISong[]>>;
}

export const PlaylistContext = createContext<IPlaylistContext | undefined>(undefined); 

// receiving the props children only
export const PlaylistContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [myPlaylist, setMyPlaylist] = useState<ISong[]>([]);

  const dataToBeSupplied = {
    myPlaylist: myPlaylist, // needed for my playlist component
    setMyPlaylist: setMyPlaylist, // needed for audiotracks component
  };

  return (
    <PlaylistContext.Provider value={dataToBeSupplied}>
      {children}
    </PlaylistContext.Provider>
  );
};

