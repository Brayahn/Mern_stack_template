import Micasa from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import ContentList from './pages/ContentList';

import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() { 
  return ( 
    <Router> 
    <NavBar/> 
    <div className="max-w-screen-md mx-auto pt-20"> 
      <Route exact path="/" component={Micasa} /> 
      <Route exact path="/About/:name" component={About} /> 
      <Route exact path="/Contact" component={Contact} /> 
      <Route exact path="/Content" component={ContentList} /> 
    </div>
    </Router>
  );
}

export default App;
