import { VFC } from 'react';
import { RecoilRoot } from 'recoil';

import Home from 'components/pages/Home';

const App: VFC = () => (
  <RecoilRoot>
    <Home />
  </RecoilRoot>
);

export default App;
