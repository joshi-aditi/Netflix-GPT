import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse;