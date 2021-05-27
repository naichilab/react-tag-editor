import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TagEditor from './components/TagEditor';
import reportWebVitals from './reportWebVitals';
import tags from './tags';

ReactDOM.render(
  <React.StrictMode>
    <TagEditor allTags={tags.sort()} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
