import FeaturedShowList from "../components/netflix/FeaturedShowList"
import LatestShowList from "../components/netflix/LatestShowList"

const Netflix = () => {
  return (
    <div>
      <h1>Netflix | Demo of Core Concepts of ReactJS</h1>

      {/* Props Demo */}
      <FeaturedShowList />

      {/* States Demo */}
      <LatestShowList />

      
    </div>
  )
}

export default Netflix