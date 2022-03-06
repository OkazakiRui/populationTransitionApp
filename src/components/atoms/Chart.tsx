/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { VFC } from 'react';
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { SeriesData } from 'types/series';

type Props = {
  chartData: SeriesData[];
};

const Chart: VFC<Props> = ({ chartData }) => {
  const yearsList = [
    '1960',
    '1965',
    '1970',
    '1975',
    '1980',
    '1985',
    '1990',
    '1995',
    '2000',
    '2005',
    '2010',
    '2015',
    '2020',
    '2025',
    '2030',
    '2035',
    '2040',
    '2045',
  ];
  const yearObj: { name: string }[] = yearsList.map((year) => ({ name: year }));
  const prefecturesNameList = chartData.map((chartObject) => chartObject.name);
  const afterData: { [key: string]: number | string }[] = [];
  yearObj.forEach((dataObj, index) => {
    let afterObj: { [key: string]: number | string } = dataObj;
    chartData.forEach((chartObj) => {
      afterObj = { ...afterObj, [chartObj.name]: chartObj.data[index] };
    });
    afterData.push(afterObj);
  });

  return (
    <div css={css({ marginInline: 'auto', width: '90%' })}>
      <ResponsiveContainer height={500}>
        <LineChart
          data={afterData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
          {prefecturesNameList.map((name) => (
            <Line dataKey={name} key={name} strokeWidth="2" />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
