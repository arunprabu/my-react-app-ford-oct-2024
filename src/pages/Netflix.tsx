import FeaturedShowList from "../components/netflix/FeaturedShowList"
import LatestShowList from "../components/netflix/LatestShowList"
import RecommendedShowList from "../components/netflix/RecommendedShowList"

const Netflix = () => {
  return (
    <div>
      <h1>Netflix | Demo of Core Concepts of ReactJS</h1>

      {/* Props Demo */}
      <FeaturedShowList />
      <hr/>

      {/* States, Events Demo */}
      <LatestShowList />

      <hr/>
      {/* Props, States, Events, Conditional Rendering, Lists & Keys Demo */}
      <RecommendedShowList />
      
    </div>
  )
}

export default Netflix