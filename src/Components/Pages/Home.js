import './Pages.css';
import ArpitPic from './arpit-bg.png'
import AMD from './amd.png';
import NIT from './nit.png';
import CK from './codekaro.jpeg';
import IITR from './iitrlogo.jpg';
import DeployedCode from './deployed_code.png';
import Analytics from './analytics.png';
import School from './school.png';
function Home(){
    return (
        <div className="home-container">
            <div className='home-intro'>
                <div className="home-left">
                    <div className="home-title">Arpit Khare</div>
                    <div className="home-desc">A Google-certified Data Analyst with around 3 years of experience. Seeking to
    increase the efficiency and accuracy of the Machine Learning models and
    Data Analytics for AMD. Implemented and researched various sentiment
    analysis solutions for product reviews for the organization. Published 2
    research papers as a part of academics.
    Adept at receiving and monitoring data in python ETL scripts from multiple
    data streams, including Access, SQL, Azure, Snowflake, and Excel data
    sources.</div>
                    <button className="btn">Contact Me</button>
                </div>
                <div className="home-right">
                    <img className="profile-img" src={ArpitPic} alt="profile" />
                </div>

            </div>
            <div className='brand-bar'>
                <img className="brand-img" src={AMD} alt='amd-logo'/>
                <img className="brand-img" src={NIT} alt='nit-logo'/>
                <img className="brand-img" src={CK} alt='ck-logo'/>
                <img className="brand-img" src={IITR} alt='iitr-logo'/>
            </div>
            <div className='home-experience'>
                <div className='home-experience-left'>
                    <div className='home-experience-year'>3 +</div>
                    <div className='home-experience-year-desc'>Years of Experience Working</div>
                </div>
                
                <div className='home-experience-right'>
                    <div className='home-experience-title'>Full Stack Developer specialized in Python, SQL and ETL handling.</div>
                    <div className='home-experience-exp-cards'>
                        <div className='home-experience-exp-card current'><img src={DeployedCode} alt="Deployed"/>Full Stack Developer</div>
                        <div className='home-experience-exp-card'><img src={Analytics} alt="Analytics"/>Data Analyst</div>
                        <div className='home-experience-exp-card'><img src={School} alt="School"/>Coding Instructor</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;