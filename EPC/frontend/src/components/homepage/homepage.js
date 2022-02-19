import React from "react"
import "./homepage.css"
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Homepage = ({setLoginUser}) => {
    return (        
        <div className="homepage">
        <Router>
    <div>
      <div className='bottons'>
      <a href="/">      <Button variant="contained" color="primary">home</Button></a>
      <a href="/about"> <Button variant="contained" color="primary"> ABOUT </Button></a>{"\t"}
      <a href="/Events"><Button variant="contained" color="primary"> EVENTS</Button> </a>{"\t"}
      <a href="/blogs"><Button variant="contained" color="primary"> BlOGS </Button> </a>{"\t"}
    </div>
        <Switch>
        <Route exact path="/"><Home />
        </Route>
        </Switch>
    </div>
      </Router>
            <div className="button" onClick={() => setLoginUser({})} >
                Logout
            </div>
    </div>
        
    )
}
function Home() {
    return (
      <div className='head'>          
      </div>
      
    );
  }
<div className="button" onClick={() => Homepage({})} >
                Home
            </div>
export default Homepage