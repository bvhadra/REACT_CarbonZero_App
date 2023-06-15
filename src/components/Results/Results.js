import React from 'react';
import Paper from '@mui/material/Paper';
//import {Routes, Route, Link} from "react-router-dom";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import Navbar from '../Navbar/Navbar';

export const energyConsumption = [
    {
      country: 'User', Travel: 59.8, Food: 937.6, Energy: 582, Clothing: 564.3,
    }, {
      country: 'Average UK', Travel: 45, Food: 600, Energy: 400, Clothing: 500,
    }, {
      country: 'Average Worldwide', Travel: 35, Food: 400, Energy: 250, Clothing: 100,
    }];

const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
  <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);

const Results = () => {
  const chartData = energyConsumption;

  return (
    <>
      <Navbar />
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={2400} />

          <BarSeries
            name="Travel"
            valueField="Travel"
            argumentField="country"
          />
          <BarSeries name="Food" valueField="Food" argumentField="country" />
          <BarSeries
            name="Energy"
            valueField="Energy"
            argumentField="country"
          />
          <BarSeries
            name="Clothing"
            valueField="Clothing"
            argumentField="country"
          />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          />
          <Title text="Your Carbon Footprint Comparison" />
          <Stack
            stacks={[{ series: ["Travel", "Food", "Energy", "Clothing"] }]}
          />
        </Chart>
      </Paper>
    </>
  );
};

export { Results };