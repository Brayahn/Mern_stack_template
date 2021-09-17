import Micasa from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import ContentList from './pages/ContentList';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import notfound from './pages/notfound';

function App() { 
  return ( 
    <Router> 
    <NavBar/> 
    <div className="max-w-screen-md mx-auto pt-20"> 
      <Route exact path="/" component={Micasa} /> 
      <Route exact path="/About/:name" component={About} /> 
      <Route exact path="/Sections" component={ContentList} /> 
      <Route component={notfound} /> 
    </div>
    </Router>
  );
}

export default App;
