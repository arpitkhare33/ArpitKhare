import CS from './comingsoon.png';
function ComingSoon(){
    return ( 
        <div className="cs-container">
            <img className='cs-img' src={CS} alt='coming soon' />
            <h2> The Website is under construction, please visit again after some time.</h2>
        </div>
    );
}

export default ComingSoon;