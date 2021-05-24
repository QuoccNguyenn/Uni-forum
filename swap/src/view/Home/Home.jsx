import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import ListControl from '../../components/ListControl/ListControl';

function Home() {
    return(
      <Router>
        <ListControl/>
        <div className="App">
          <Route path='/categories' component={Categories}/>
        </div>
      </Router>
    );
}

export default Home;