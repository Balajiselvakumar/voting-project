import * as React from 'react';
import Paper from '@mui/material/Paper';
import Sol_balance from '../Service/Chartresult'


import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';

const data = [
  { total_voter: 'ADMK', vote_count: 2.525 },
  { total_voter: 'DMK', vote_count: 3.018 },
  { total_voter: 'PMK', vote_count: 3.682 },
  { total_voter: 'CPT', vote_count: 4.440 },
  { total_voter: 'MNM', vote_count: 5.310 },
  { total_voter: 'NTK', population: 6.127 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;


    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="vote_count"
            argumentField="total_voter"
          />
          <Title
            text="VOTING RESULT"
          />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
  }
}
