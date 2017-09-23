import React from 'react';
import Settings from './js/Settings';

/**
* Settings that will be shown on the first time th epage gets loaded
*/
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showSettings: 1
    };

    // binding functions to this namespace
    this.changeSetting = this.changeSetting.bind(this);
    this.loadWall = this.loadWall.bind(this);
    this.wall = this.wall.bind(this);

  }
  
  changeSetting(key, value) {
    // change settings based on id and value
    this.setState({[key]: value});
  }

  loadWall(newSettings) {
    //update the settings for the feed and show the wall
    newSettings.showSettings = 0;
    this.setState(newSettings);
  }

  wall(){
    // Render for the wall
    return (
      <div className="twitterWall">
        Test
      </div>
    )
  }

  render() {

    //--- for testing purposes, outpuing the settings everytime something is rendered ---//
    console.log(this.state);
    //------//

    var currentElement = null;
    if(this.state.showSettings){
      currentElement = <Settings onClick={ this.loadWall }/>;
    } else {
      currentElement = this.wall();
    }
    return (
      <div className="container">
        { currentElement }
      </div>
    );
  }
}
export default App;
