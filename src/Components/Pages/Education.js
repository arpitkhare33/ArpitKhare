import ComingSoon from "./ComingSoon";
import NIT from './education_images/nit.jpg';
import JK from './education_images/jk.jpg';
import ECC from './education_images/ecc.jpg';
import './Education.css'
function Education(){
    return (
        <div className="education-container">
            <h1 className="title">Education</h1>
            <div className="card-container">
                <div className="card">
                    <div className="header">
                        <img className="img" src={NIT} alt="nit"/>
                    </div>
                    <div className="college">National Institute of Technology, Jamshedpur</div>
                    <div className="degree">M.Tech. CSE</div>
                    <div className="timespan">(2021 - 2023)</div>
                    <div className="cgpa">CGPA: 8.53</div>
                </div>
                <div className="card">
                    <div className="header">
                        <img className="img" src={JK} alt="jk"/>
                    </div>
                    <div className="college">University of Allahabad (JK Institute), Prayagraj</div>
                    <div className="degree">M.C.A.</div>
                    <div className="timespan">(2018 - 2021)</div>
                    <div className="cgpa">CGPA: 9.81</div>
                </div>
                <div className="card">
                    <div className="header">
                        <img className="img" src={ECC} alt="nit"/>
                    </div>
                    <div className="college">Ewing Christian College (U.O.A.), Prayagraj</div>
                    <div className="degree">B.Sc.</div>
                    <div className="timespan">(2015 - 2018)</div>
                    <div className="cgpa">CGPA: 5.7</div>
                </div>
            </div>
            <div className="publication-container">
                <h1 className="pub-title">Publication</h1>
                <div className="publication-content">
                <div className="publication">
                    <h4>* Arpit Khare et al., “Sentiment Analysis and Sarcasm Detection of Indian General Election Tweets”, International 
Conference on Advanced Network Technologies and Intelligent Computing (ANTIC-2021).
                    </h4>
                </div>
                <div className="publication">
                    <h4>* Arpit Khare et al., “E-Mail Assistant - Automation of E-Mail Handling and Management Using Robotic Process 
Automation”, 2022 International Conference on Decision Aid Sciences and Applications (DASA).
</h4></div>
                </div>
            </div>
        </div>
    );
}

export default Education;