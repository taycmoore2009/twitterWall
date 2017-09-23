import React from 'react';

/**
* Settings that will be shown on the first time th epage gets loaded
*/
class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedQuery: "",
      refreshInterval: 1,
      slideType: 1,
      numOfSlides: 1
    };

    // binding functions to this namespace
    this.changeSetting = this.changeSetting.bind(this);
    this.updateOptions = this.updateOptions.bind(this);

  }

  generateOptions(stateName, options){
    // Method to generate the options element with variables provided
    return (
      <select id={ stateName } defaultValue={ this.state[stateName] } onChange={ this.changeSetting }>
        {options.map((option) => (
          <option key={ option.value } value={ option.value }>{ option.label }</option>
        ))}
      </select>
    );
  }

  changeSetting(event){
    // update the settings internally to be passed to parent when finished
    this.setState({[event.target.id]: event.target.value});
  }

  updateOptions(){
    // send new settings to parent and start feed
    this.props.onClick(this.state);
  }

  render() {
    var slideTypes = [{value: 1, label: "Vertical Multi"}, {value: 2, label: "Horizontal Multi"}, {value: 3, label: "Single Fade"}, {value: 4, label: "Single Slide"}],
        refreshIntervals = [{value: 1, label: "1 minute"}, {value: 5, label: "5 minutes"}, {value: 10, label: "10 minutes"}, {value: 30, label: "30 minutes"}, {value: 60, label: "60 minutes"},]
    return (
      <div className="settings">
        <h2>Settings</h2>
        <ul className="mainSettings">
            <li><label htmlFor="feedQuery">Twitter Feed: </label><input type="text" value={ this.state.feedQuery } onChange={ this.changeSetting } id="feedQuery" /></li>
            <li>
                <label htmlFor="refreshInterval">Refresh Interval: </label>
                { this.generateOptions("refreshInterval", refreshIntervals) }
            </li>
            <li>
                <label htmlFor="slideType">Slide Type: </label>
                { this.generateOptions("slideType", slideTypes) }
            </li>
        </ul>
        <ul className="optionalSettings">
            <li>Number of Slides</li>
            <li></li>
        </ul>
        <button onClick={ this.updateOptions }>Start Twitter Feed</button>
      </div>
    );
  }
}
export default Settings;