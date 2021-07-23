import './App.scss';
import Topbar from './components/Topbar/Topbar';
import Works from './components/Works/Works';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import { Route, Link } from 'react-router-dom';

function App ()
{
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        {/* <Route exact path='/' component={Intro} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/works' component={Works} /> */}
        <Intro />
        <Portfolio />
        <Works />
      </div>

    </div>
  );
}

export default App;
