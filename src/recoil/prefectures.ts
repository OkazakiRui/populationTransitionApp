import { atom, selector } from 'recoil';

import apiClient from 'library/apiClient';
import { PrefecturesResult } from 'types/prefecture';

// キャッシュを作成した
const prefecturesAtom = atom<PrefecturesResult | null>({
  key: 'prefecturesAtom',
  default: null,
});

const prefecturesSelector = selector<PrefecturesResult>({
  key: 'prefecturesSelector',
  get: async ({ get }) => {
    // キャッシュにデータがあればキャッシュを返す
    const currentValue = get(prefecturesAtom);
    if (currentValue) return currentValue;

    const { data } = await apiClient.get<PrefecturesResult>('/prefectures');

    return data;
  },
  set: ({ set }, newValue) => {
    set(prefecturesAtom, newValue);
  },
});
export default prefecturesSelector;
