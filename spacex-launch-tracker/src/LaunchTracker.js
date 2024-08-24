import { useState, useEffect } from "react";
import './LaunchTracker.css';
const SPACEX_API_URL = 'https://api.spacexdata.com/v4/launches';

function LaunchTracker() {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const launchesPerPage = 10;

    useEffect(() => {
        fetch(SPACEX_API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((data) => {
            setLaunches(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        }, []);
    });

    const indexOfLastLaunch = currentPage * launchesPerPage;
    const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
    const currentLaunches = launches.slice(indexOfFirstLaunch, indexOfLastLaunch);
    const totalPages = Math.ceil(launches.length / launchesPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <h1 className="title">SpaceX Launch Tracker</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <ul className="launches-list">
                {currentLaunches.map((launch) => (
                    <li key={launch.id} className="launch-item">
                        <h2>{launch.name}</h2>
                        <p>Data: {new Date(launch.data_utc).toLocaleDateString()}</p>
                        <p>Rocket: {launch.rocket}</p>
                        <p>
                            Launch Site: {launch.launchpad}
                        </p>
                        <p>
                            Details: {launch.details ? launch.details: 'No details available for this launch'}
                        </p>
                        <a href={launch.links.webcast} target="_blank" rel="noopener noreferrer">
                            Watch Launch
                        </a>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                {Array.from({length: totalPages}, (_, index) => index + 1).map((pageNumber) => (
                    <button 
                        key={pageNumber}
                        onClick={() => handleClick(pageNumber)}
                        disabled={pageNumber === currentPage}
                        className={`pagination-button ${pageNumber === currentPage ? 'active':''}`}
                        >
                            {pageNumber}
                        </button>))
                }
            </div>
        </div>
    );
}

export default LaunchTracker;