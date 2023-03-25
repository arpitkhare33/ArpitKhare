import './Footer.css'
import Insta from './Pages/instagram.svg'
import YT from './Pages/youtube.svg'
import Git from './Pages/github.svg'
import Linkedin from './Pages/linkedin.svg'
function Footer(){
    return (
        <div className="footer">
            {/* <h1 className='footer-title'>Arpit Khare</h1> */}
            <div className='footer-navbar'>
                <a href='https://www.instagram.com/arpit_khare2107/'><img src={Insta} alt='Instagram' className='social-items'/></a>
                <a href='https://www.youtube.com/@binarypathshala3313'><img src={YT} alt='Youtube' className='social-items'/></a>
                <a href='https://github.com/arpitkhare33'><img src={Git} alt='Github' className='social-items'/></a>
                <a href='https://www.linkedin.com/in/arpit-khare-ak/'><img src={Linkedin} alt='Linkedin' className='social-items'/></a>
            </div>
        </div>
    );
}

export default Footer;