import React, { useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { TotalContext } from '../../context/TotalContext';

import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  // LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation} from '@devexpress/dx-react-chart';

const Root = props => (
  <Legend.Root {...props} 
  sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }}/>
);

const Label = props => (
  <Legend.Label {...props}
  sx={{ whiteSpace: 'nowrap' }}

  />
);

const Results = () => {
  const [renderAxis, setRenderAxis] = useState(false);


  useEffect(() => {
    setRenderAxis(true);
  }, []);

  const { total } = useContext(TotalContext);

  const energyConsumption = [
    {
      country: 'User',
      Travel: total.travel,
      Food: total.food,
      Energy: total.energy,
      Clothing: total.clothing,
    },
    {
      country: 'Average UK',
      Travel: 2.5,
      Food: 1.5,
      Energy: 3,
      Clothing: 0.8,
    },
    {
      country: 'Average Worldwide',
      Travel: 1.5,
      Food: 1.2,
      Energy: 2,
      Clothing: 0.4,
    }
  ];

  const chartData = energyConsumption;
  // const goalsData = [{ x: 'User', y: 2.5 }, { x: 'Average Worldwide', y: 2.5 }];

  return (
    <>
     <Paper
    //  style={{ height: '60vh', padding: '20px' }}
     > {/* Adjust the height and padding values as needed */}
        <Chart data={chartData} height={600}> {/* Set the desired height of the chart */}
          {renderAxis && <ArgumentAxis />}
          {renderAxis && <ValueAxis max={2400} />}
          <BarSeries name="Travel" valueField="Travel" argumentField="country" />
          <BarSeries name="Food" valueField="Food" argumentField="country" />
          <BarSeries name="Energy" valueField="Energy" argumentField="country" />
          <BarSeries name="Clothing" valueField="Clothing" argumentField="country" />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Your Carbon Footprint Comparison" />
          <Stack stacks={[{ series: ['Travel', 'Food', 'Energy', 'Clothing'] }]} />
        </Chart>
      </Paper>
    </>
  );
};

export default Results;
