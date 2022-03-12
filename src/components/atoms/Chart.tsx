/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState, VFC } from 'react';
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

const Chart: VFC<Props> = ({ chartData }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // モバイルの場合は siMobile を true にする
    setIsMobile(window.matchMedia('(max-device-width: 430px)').matches);

    // windowがリサイズされた場合、現在の幅が430px以下の場合、モバイルと判定しstateを変更する
    window.addEventListener('resize', () => {
      if (isMobile !== window.matchMedia('(max-device-width: 430px)').matches) {
        setIsMobile((prevState) => !prevState);
      }
    });
  }, []);

  return (
    <div css={!isMobile && styles.wrap}>
      <ResponsiveContainer height={500}>
        <LineChart
          data={chartData.data}
          margin={{
            top: 35,
            right: -20,
            left: 0,
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
          <Legend
            layout={isMobile ? 'horizontal' : 'vertical'}
            align={isMobile ? 'center' : 'right'}
            verticalAlign={isMobile ? 'bottom' : 'middle'}
          />
          {chartData.prefecturesNameList.map((name) => (
            <Line
              dataKey={name}
              key={name}
              stroke={`#${encodeURIComponent(name)
                .replaceAll('%', '')
                .slice(3, 9)}`}
              strokeWidth="2"
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
