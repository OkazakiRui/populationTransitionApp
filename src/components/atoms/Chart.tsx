import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { VFC } from 'react';

import { SeriesData } from 'types/series';

type Props = {
  chartData: SeriesData[];
};

/**
 * HighchartsReactで使用するoptionを返す関数
 * @date 2022-03-05
 * @param {SeriesData[]} chartData
 * @returns {Options}
 */
const options = (chartData: SeriesData[]): Options => ({
  series: chartData,
  title: {
    style: {
      display: 'none',
    },
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'vertical',
  },
  xAxis: {
    title: {
      text: '年度',
    },
    categories: [
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
    ],
  },
  yAxis: {
    title: {
      text: '人口数',
    },
  },
});

const Chart: VFC<Props> = ({ chartData }) => (
  <HighchartsReact highcharts={Highcharts} options={options(chartData)} />
);

export default Chart;
