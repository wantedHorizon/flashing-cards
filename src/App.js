import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from './components/UI/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './components/flashing-cards/game/Game';
import Routes from './router/Routes';
import Management from './components/flashing-cards/Management';
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header />
        <Switch>
            <Route path={Routes.home} exact component={Game}/>
            <Route path={Routes.playCard} exact component={Game}/>

            <Route path={Routes.management} exact component={Management}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
