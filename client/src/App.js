import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Forms from './pages/FindEmployee';
import Create from './pages/CreateEmployee';
import Delete from './pages/DeleteEmployee';

function App() {
  return (
    <div>
      <h1>Find employees data</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Forms } />
          <Route exact path="/create" component={ Create } />
          <Route exact path="/delete" component={ Delete } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
