import React, { useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { TotalContext } from '../../context/TotalContext';

import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
  <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);

const Results = () => {
  const [renderAxis, setRenderAxis] = useState(false);

  useEffect(() => {
    setRenderAxis(true);
  }, []);

  const { total } = useContext(TotalContext);

  const energyConsumption = [
    {
      country: 'User', Travel: total.travel, Food: total.food, Energy: total.energy, Clothing: total.clothing,
    }, {
      country: 'Average UK', Travel: 1, Food: 2, Energy: 3, Clothing: 4,
    }, {
      country: 'Average Worldwide', Travel: 1, Food: 2, Energy: 3, Clothing: 4,
    }
  ];

  const chartData = energyConsumption;

  return (
    <>
      <Paper>
        <Chart data={chartData}>
          {renderAxis && <ArgumentAxis />}
          {renderAxis && <ValueAxis max={2400} />}

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

export default Results;
