import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TagEditor from './components/TagEditor';
import reportWebVitals from './reportWebVitals';
import allTagNames from './tags';

type Tag = {
  name: string;
  lock: boolean;
};

const currentTags: Tag[] = [
  { name: 'アクション', lock: true },
  { name: 'シューティング', lock: true },
  { name: 'オンライン', lock: true },
  { name: 'ほげほげ', lock: false },
  { name: 'XXXXXXXX', lock: false },
  { name: 'aiueo', lock: false },
];

ReactDOM.render(
  <React.StrictMode>
    <div className="tageditor-wrapper">
      <TagEditor
        allTagNames={allTagNames}
        initialCurrentTags={currentTags.sort()}
        own
      />
    </div>
    <div className="tageditor-wrapper">
      <TagEditor
        allTagNames={allTagNames}
        initialCurrentTags={currentTags.sort()}
        own={false}
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
