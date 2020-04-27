import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from 'serviceWorker';
import App from 'App';
import 'index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
