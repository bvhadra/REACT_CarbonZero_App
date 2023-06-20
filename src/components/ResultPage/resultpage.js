import { Link } from 'react-router-dom'
import Results from '../Results/Results'
import Navbar from '../Navbar/Navbar'

export default function Resultpage() {

    // handleClick = () => {
    // }

    return (
        <>
            <Navbar />
            <h1>Here are your carbon footprint results!</h1>
            <Results />
            <Link to="/Actions">
            <button className="see-results-button"> Take Action! </button>
            </Link>
        </>
    )
}
