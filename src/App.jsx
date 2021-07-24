import React, {Component} from "react";

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {today: ""};
  }

  evShowDate = (e) => {
    this.setState({today: e.target.dataset.date});
  }

  render() {
    let year = 2020;
    let date = new Date(year, 0, 1);
    let offset = date.getDay();

    let ical = Array(7).fill().map(()=>Array(53).fill(0));;

    for (let y = 0; y < ical.length; y++) {
      let day = y + 1 - offset;

      for (let x = 0; x < ical[y].length; x++) {
        // 1, 8, 15, 22, 29, ...
        let today = new Date(date);
        today.setDate(today.getDate() + (day-1));

        if (day < 1 || day > 366) {
          ical[y][x] = <td className="empty-cell"></td>;
        } else {
          ical[y][x] = <td
            className="cell"
            data-day={day}
            data-date={today.toISOString()}
            onMouseOver={this.evShowDate}></td>;
        }

        day += 7;
      }
    }

    let rows = [];
    for (let y = 0; y < ical.length; y++) {
      rows.push(<tr>{ical[y]}</tr>);
    }

    return (
      <div>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>

        <div id="date">{this.state.today}</div>
      </div>
    );
  }
}
