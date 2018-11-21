import React, { Component } from 'react';

import WelcomePage from 'components/WelcomePage';
import GamePage from 'components/GamePage';
import KnowledgeBase from 'components/KnowledgeBase';
import Footer from 'components/Footer';

// import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';

const pages = {
  welcome: <WelcomePage />,
  game: <GamePage />,
  knowledge: <KnowledgeBase />,
};

class App extends Component {
  state = {
    route: 'knowledge',
  };

  changeRoute = route => this.setState({ route });

  render() {
    const { route } = this.state;

    return (
      <section style={{ height: '100vh' }} className="container-fluid d-flex flex-column justify-content-center bg-dark text-white">
        <div className="container-fluid align-self-center text-center">
          {pages[route]}
        </div>
        <Footer activeRoute={route} onRouteChange={this.changeRoute} />
      </section>
    );
  }
}

export default App;
