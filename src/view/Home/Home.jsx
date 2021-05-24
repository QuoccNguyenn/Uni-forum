import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Categories from '../../components/Categories/Categories';

function Home() {
    return(
        <Router>
          <div className="App">
            {/* <Route path='/' exact component={Home}/> */}
            <Route path='/categories' component={Categories}/>
          </div>
        </Router>
      );
}

export default Home;