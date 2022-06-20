import * as React from 'react';
import Paper from '@mui/material/Paper';


import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';
import GetResult from "../Service/Chartresult";
import Typography from "@mui/material/Typography";

const data = [];

export default class Result extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      data,
    };
  }

  componentDidMount() {
      GetResult().then(r => {
          this.handleLoad()
      });
 }

 handleLoad(){
      const votes = sessionStorage.getItem('votes');
      const data = JSON.parse(votes);
      this.setState({data});
 }

  render() {
    const { data: chartData } = this.state;
    console.log(this.state);
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
          <Typography
         variant="h2"
         align="center"

         >
            ELECTION VOTE RESULT
         </Typography>
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
  }
}
