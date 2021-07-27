import React from 'react';
import Calendar from './Calendar.jsx';

import './App.css';

export default class App extends React.Component {
  listbackups = () => {
    let folders = [
      // Output of the command "tmutil listbackups" in macOS.
      // Ensure that each line is a separate entry in the array.
    ];

    let dates = folders.map(x => x.split("/").reverse()[0].substr(0, 10));

    let backups = {};

    for (let date of dates) {
      if (date in backups) {
        backups[date]++;
        continue;
      }
      backups[date] = 1;
    }

    return backups;
  }

  render() {
    let backups = this.listbackups();

    return (
      <div className="app">
        <h1>Time Machine (macOS) Visualization</h1>
        <Calendar year="2019" backups={backups} />
        <Calendar year="2020" backups={backups} />
        <Calendar year="2021" backups={backups} />
      </div>
    );
  }
}
