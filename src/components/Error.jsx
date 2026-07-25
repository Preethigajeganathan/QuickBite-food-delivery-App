import ErrorImg from '../assets/Error.png'
import { Link } from 'react-router';

function Error(){
    return(
        <div className='relative w-screen h-screen overflow-hidden'>
            <img src={ErrorImg} className='w-full h-full object-contain' alt="Error" />
            <Link to="/" className="absolute bottom-28 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-950 text-white rounded-full font-bold">Go Home</Link>
        </div>
    )
}
export default Error;