/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { VFC } from 'react';
import {
  Label,
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
  wrap: css({ marginInline: 'auto', marginTop: '1rem', width: '90%' }),
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
          top: 35,
          right: 55,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name">
          <Label value="年度" offset={25} position="right" />
        </XAxis>
        <YAxis
          tickFormatter={(value: number) =>
            new Intl.NumberFormat('ja', {
              notation: 'compact',
              compactDisplay: 'short',
            }).format(value)
          } // eslint-disable-line react/jsx-curly-newline
        >
          <Label value="人口数" offset={10} position="top" />
        </YAxis>
        <Tooltip
          formatter={(value: number) =>
            new Intl.NumberFormat('ja', {
              notation: 'compact',
              compactDisplay: 'short',
            }).format(value)
          } // eslint-disable-line react/jsx-curly-newline
          labelFormatter={(label: string) => `${label}年度`}
        />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        {chartData.prefecturesNameList.map((name) => (
          <Line dataKey={name} key={name} strokeWidth="2" dot={false} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
