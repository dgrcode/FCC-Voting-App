import Chart from 'chart.js';
import React from 'react';
import PropTypes from 'prop-types';

export default class ChartView extends React.Component {
  static propTypes = {
    labels: PropTypes.array.isRequired,
    votes: PropTypes.array.isRequired,
    selectedHandler: PropTypes.func.isRequired
  }

  componentDidMount () {
    const votes = this.props.votes;
    const labels = this.props.labels;
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

    this.chart = chart;
  }

  componentWillReceiveProps (nextProps) {
    // TODO check if the max vote value is out of bounds to increase y label
    console.log('chart willreceiveprops');
    this.chart.data.datasets[0].data = nextProps.votes;
    this.chart.update();
  }

  shouldComponentUpdate () {
    return false;
  }

  clickHandler = (e) => {
    if (this.chart.getDatasetAtEvent(e).length === 0) {
      return;
    }
    const elem = this.chart.getElementsAtEvent(e);
    const id = elem[0]._index;
    this.props.selectedHandler(id);
  }

  render () {
    return (
      <div id="chart-container">
        <canvas id="chart" height="300px" width="500px" onClick={this.clickHandler}/>
      </div>
    );
  }
}
