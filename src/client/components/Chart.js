import Chart from 'chart.js';
import React from 'react';
import PropTypes from 'prop-types';

export default class ChartView extends React.Component {
  static propTypes = {
    poll: PropTypes.object.isRequired
  }

  componentDidMount () {
    const poll = this.props.poll;
    const [labels, votes] = poll.choices.reduce((accum, choice) => {
      accum[0].push(choice.choice);
      accum[1].push(choice.votes);
      return accum;
    }, [[], []]);
    console.log(labels);
    console.log(votes);
    const data = {
      labels,
      datasets: [
        {
          data: votes
        }
      ]
    };
    const canvas = document.getElementById('chart');
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMax: Math.max(...votes) + 2,
              stepSize: 1
            }
          }]
        }
      }
    });
  }

  render () {
    return (
      <div id="chart-container">
        <canvas id="chart" height="300px" width="500px"/>
      </div>
    );
  }
}
