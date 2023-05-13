import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'
import Guide from './components/Guide'
import Home from './components/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">COMPANY PORTAL</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      
      {/* <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
      <Link className="nav-item nav-link active" to="/">Home</Link>
      <Link className="nav-item nav-link " to="/guide">Guide</Link>

      
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
