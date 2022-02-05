import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

declare global {
  interface Window {
    initialData: any[]
  }
}

ReactDOM.render(
  <h1>Hello World from React</h1>,
  document.getElementById('root')
);