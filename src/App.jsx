import React from 'react';
import Calendar from './Calendar.jsx';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Calendar year="2020" />
        <Calendar year="2021" />
        <Calendar year="2022" />
      </div>
    );
  }
}
