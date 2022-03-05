import { useState } from 'react';

import { SeriesData } from 'types/series';

/**
 * chartに関するデータを管理するhooks
 * @date 2022-03-05
 * @returns {SeriesData[]} chartData
 * @returns {(series: SeriesData) => void} addChartData
 * @returns {(prefName: string) => void} removeChartData
 */
const useChartData = (): [
  SeriesData[],
  (series: SeriesData) => void,
  (prefName: string) => void,
] => {
  // chartに表示するデータを保持
  const [chartData, setChartData] = useState<SeriesData[]>([]);

  /**
   * chartDataに引数のデータを追加します
   * @date 2022-03-05
   * @param {SeriesData} series
   * @returns {void}
   */
  const addChartData = (series: SeriesData) => {
    if (chartData === null) setChartData([series]);
    else setChartData([...chartData, series]);
  };

  /**
   * chartDataから名前が一致したデータを削除します
   * @date 2022-03-05
   * @param {string} prefName
   * @returns {any}
   */
  const removeChartData = (prefName: string) => {
    setChartData(chartData.filter((item) => item.name !== prefName));
  };

  return [chartData, addChartData, removeChartData];
};
export default useChartData;
