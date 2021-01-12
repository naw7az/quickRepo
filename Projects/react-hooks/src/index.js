import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LearnUseRef from './components/LearnUseRef';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <LearnUseRef />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
