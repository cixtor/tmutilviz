import React from 'react';
import Calendar from './Calendar.jsx';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  listbackups = () => {
    let folders = [
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
      <div>
        <Calendar year="2020" backups={backups} />
        <Calendar year="2021" backups={backups} />
        <Calendar year="2022" backups={backups} />
      </div>
    );
  }
}
