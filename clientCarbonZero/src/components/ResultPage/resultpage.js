import { Link } from 'react-router-dom'
import Results from '../Results/Results'
import Navbar from '../Navbar/Navbar'
import './ResultPage.css';

export default function Resultpage() {

    return (
      <div className='resultpage-main-div'>
        <Navbar />
        <h1 id="resultpage-h1">Here are your carbon footprint results!</h1>
        <div id='resultpage-div'>
          <Results />
        </div>
        <Link to="/Actions">
          <button className='see-results-button' id="see-results"> Take Action! </button>
        </Link>
      </div>
    );
}
