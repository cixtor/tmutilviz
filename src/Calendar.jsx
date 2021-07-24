import React from 'react';

import './Calendar.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {today: ""};
  }

  evShowDate = (e) => {
    this.setState({today: e.target.dataset.date});
  }

  render() {
    let year = parseInt(this.props.year);
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
          ical[y][x] = <td className="cell empty"></td>;
        } else {
          let classes = "cell";

          if (today.getMonth() % 2 === 0) {
            classes += " odd";
          } else {
            classes += " even";
          }

          ical[y][x] = <td
            className={classes}
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
      <div className="calendar">
        <h4 className="title">{year}</h4>

        <table className="heatmap">
          <tbody>
            {rows}
          </tbody>
        </table>

        <div className="tooltip">{this.state.today}</div>
      </div>
    );
  }
}
