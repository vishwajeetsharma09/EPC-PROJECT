import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/About">
            <About/>
            </Route>
            <Route path="/Events">
            <Events/>
            </Route>
            <Route path="/Blogs">
            <Blogs/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

const About =() => 
      <div className='head'>
      <center><h2 className='dep'>EMPLOYMNET CONSULTANCY SYSYTEM</h2>
      <img src="photo1.jpeg" alt="no img" width="500" height="300"></img>
     <center><h3>Description:</h3></center>
     </center>
      <p>
      Employability consultancy system helps
freshers to find their desired
workplace and companies to find worthy
employees 

Getting shortlisted in any company
recruitment drive is so difficult
nowadays due to high demand for each
post , But if you have the right
skillsetand right technical background
consultancy system can help you in
getting your dream job. 

Employability
consultancy system acts as a bridge
between people who are willing to work and for
people who are willing to provide work.

The great advantage of Employability
consultancy system is any person can apply for jobs globally
based on his/her  educational
background , technical backgraound and
experience online easily.

Unemployment is the problem of a
developing country like INDIA. This is
due to lack of properapproach between
employee and employer.

Consultant acts as a middleman between
them. He/She collects the data from
both the parties and tries to fulfill
their needs by asking a perfect match of
either requirements.

Both employee and employer can approach
consultant and give their data.

This package CONSULTANCY SYSTEM .
provides customized Screen and enhanced
menu utilities. It is designed in such
a way that it is friendly with the
user.

This system has computerized the
operations done in a JOB CONSULTANCY.
It maintains various files by doing
additions & modifications to them.

It has a selection process where persons are
selected according to the client
requirements. This is done making use
of personal details, personal
qualification, client details and
client requirements.

This system provides information to
both client and customers according to
their requirements and qualifications.
By providing this service it attains
some commission. Thus the system
provides effective, efficient, cost
saving and time saving operations in a
JOB CONSULTANCY.

The Project mainly deals with,
associate requesting the Unemployed and
also the clients requirements, storing
information about the status of the
qualifications available in the
customers and to update the clients
related tables for the selection of the
persons that can be fit into the job by
the consultants to their clients.
By using such a system, the clients
task of taking a decision for the
acceptance or denial of the requests
placed by the customers is reduced
significantly. Instead of searching the
manual interviews and selecting the
people.
    </p>
    </div>
    const Events =() =>
    <div className='head'>
        <center><h1 className='dep'>Events</h1>
        <img src="photo5.jpeg" width="500" height="300"alt="Avatar" ></img>
        <h2>Description:</h2>
        </center>
        <p>
        It has a selection process where persons are
selected according to the client
requirements. This is done making use
of personal details, personal
qualification, client details and
client requirements.

This system provides information to
both client and customers according to
their requirements and qualifications.
By providing this service it attains
some commission. Thus the system
provides effective, efficient, cost
saving and time saving operations in a
JOB CONSULTANCY.The Project mainly deals with,
associate requesting the Unemployed and
also the clients requirements, storing
information about the status of the
qualifications available in the
customers and to update the clients
related tables for the selection of the
persons that can be fit into the job by
the consultants to their clients.
By using such a system, the clients
task of taking a decision for the
acceptance or denial of the requests
placed by the customers is reduced
significantly. Instead of searching the
manual interviews and selecting the
people.
        </p>
        <p>
          <a href="/https://www.oriconsul-india.com/index.html">GET THE SOURCE </a>
          </p>
        <p>
        </p>
        
      </div>
    const Blogs =() =>
    <div className='head'>
        <center><h1 className='dep'>Blogs</h1></center>
        <center><img src="photo3.jpeg" width="500" height="300" alt="avatar"></img>
        <h3>Description:</h3>
        </center>
        <p>
  "The strength of the department is the faculty drawn from reputed national and international academic & research organizations. 
  The faculty has more than 15 years of teaching experience with good industrial exposure. 
  Faculty with postdoctoral research experience is feathers in the cap of the department. 
  The faculty are extensively involved in quality research & development and in the last 3 years has acquired projects worth more than 3 crores rupees in the areas of biofuels, biomedical research, genomics and proteomics, 
  bioinformatics and food biotechnology funded by prestigious research organizations like DBT, DST, UGC and ICMR. The department also has women scientists working under DST funded projects. The Department has filed patents with IPO in collaboration with industry. The biotechnology department at KL University has 7 well-furnished and fully equipped state-of-the-art laboratories, 4 research centers along with own computer center with latest molecular modeling and drug design software purchased from Schrodinger LLC, USA. As a part of student centric learning development various measures and initiatives are taken to improve the skills of students. These include exposure to guest lectures, industrial training and tours, communication and soft skills, mini-projects, paper presentations in national level paper contests, classroom seminars, placement opportunities, academic & career counseling, certificate courses, live projects in industry and exposure to journals etc. Another area of concentration for the faculty is research consultancy. The department has signed MoUs with Sneha Biotech, Vijayawada and NRI Academy of Medical Sciences, Guntur for faculty and student training and collaborative research. The department of biotechnology is also in collaboration with the Indian Institute of Science, Bengaluru and University of Oxford, UK for initiating collaborative research in biomedical sciences.",
        </p>
        <p>
          <li>Neuro Sciences</li>
        </p>
        
      </div>

const footer =() =>
      <footer class="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
      <a href="#"><i class="fa fa-facebook-official"></i></a>
      <a href="#"><i class="fa fa-pinterest-p"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-flickr"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <p class="w3-medium">
      Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
      </p>
    </footer>

export default App;
