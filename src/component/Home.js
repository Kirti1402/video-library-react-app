import {Link} from 'react-router-dom';


export const HomePage = () => {
    return (
       <div className='home-container'>
            <h2>Welcome To Video Library</h2>
            <h3>To browse all videos, click the below button or go the Video Page.</h3>
            <Link className='home-link'to="/videos">Explore All Videos</Link>
       </div>
    );
}