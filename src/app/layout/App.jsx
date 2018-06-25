import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventsDashboard from '../../features/events/EventsDashboard/EventsDashboard'
import NavBar from '../../nav/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
          <Container className="main">
           <EventsDashboard/>
           </Container>
        </div>

    );
  }
}
export default App;
