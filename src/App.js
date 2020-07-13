import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { GlobalProvider } from './components/context/UserState';

const App = () => {
  return (
    <div className="mx-auto" style={{ maxWidth: '90rem' }}>
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
