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

import { RechartData } from 'types/series';

const styles = {
  wrap: css({ marginInline: 'auto', marginTop: '3rem', width: '90%' }),
};

type Props = {
  chartData: RechartData;
};

const Chart: VFC<Props> = ({ chartData }) => (
  <div css={styles.wrap}>
    <ResponsiveContainer height={500}>
      <LineChart
        data={chartData.data}
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
        {chartData.prefecturesNameList.map((name) => (
          <Line dataKey={name} key={name} strokeWidth="2" />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
