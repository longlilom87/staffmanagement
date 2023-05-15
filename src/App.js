import {BrowserRouter,Routes, Route, NavLink} from 'react-router-dom'
import Guide from './components/Guide'
import Home from './components/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  function activeClass({isActive}) {
    if (isActive){
      return 'active';
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href='/'>COMPANY PORTAL</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      {/* <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
      <NavLink className={"nav-item nav-link "+activeClass} to="/">Home</NavLink>
      <NavLink className={"nav-item nav-link "+activeClass} to="/guide">Guide</NavLink>  
      </div>
    </div>
</nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="guide" element={<Guide/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
