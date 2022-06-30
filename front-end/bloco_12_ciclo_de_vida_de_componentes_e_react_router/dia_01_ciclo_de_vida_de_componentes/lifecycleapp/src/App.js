import React from 'react'
import './App.css';
import Connections from './components/Connections';
import Profile from './components/Profile';

class App extends React.Component {
state = {
  showProfile: true,
}

  changeProfile = () => {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    const { showProfile } = this.state;
    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        { showProfile ? <Profile /> : null }
        <div className="central d-flex justify-content-center">
          <button
            className="btn btn-dark align-self-center"
            type="button"
            onClick={ this.changeProfile }
          >
            Mostrar / Ocultar Perfil
          </button>
        </div>
        <Connections />
      </div>
    );
  }
}


export default App;
