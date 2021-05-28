import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TagEditor from './components/TagEditor';
import reportWebVitals from './reportWebVitals';
import tags from './tags';

const currentTags = [
  { name: 'アクション', lock: true },
  { name: 'シューティング', lock: true },
  { name: 'オンライン', lock: true },
  { name: 'ほげほげ', lock: false },
  { name: 'XXXXXXXX', lock: false },
  { name: 'aiueo', lock: false },
];

ReactDOM.render(
  <React.StrictMode>
    <TagEditor
      initialAllTags={tags.sort()}
      initialCurrentTags={currentTags.sort()}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
