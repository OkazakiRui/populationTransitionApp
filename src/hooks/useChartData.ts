import { useState } from 'react';

import { RechartData, SeriesData } from 'types/series';

/**
 * chartに関するデータを管理するhooks
 * @date 2022-03-05
 * @returns {RechartData} rechartData
 * @returns {(series: SeriesData) => void} addChartData
 * @returns {(prefName: string) => void} removeChartData
 */
const useChartData = (): [
  RechartData,
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
   * @returns {void}
   */
  const removeChartData = (prefName: string) => {
    setChartData(chartData.filter((item) => item.name !== prefName));
  };

  // rechartで線を作るために使用する配列
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

  // データをrechartで使いやすい形にする
  const prefecturesNameList = chartData.map((chartObject) => chartObject.name);
  const afterData: { [key: string]: number | string }[] = [];
  yearObj.forEach((dataObj, index) => {
    let afterObj: { [key: string]: number | string } = dataObj;
    chartData.forEach((chartObj) => {
      afterObj = { ...afterObj, [chartObj.name]: chartObj.data[index] };
    });
    afterData.push(afterObj);
  });

  // rechartで使うデータをまとめる
  const rechartData: RechartData = { data: afterData, prefecturesNameList };

  return [rechartData, addChartData, removeChartData];
};
export default useChartData;
