import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Forms from './pages/FindEmployee';

function App() {
  return (
    <div>
      <h1>Find employees data</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Forms } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
