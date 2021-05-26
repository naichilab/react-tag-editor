import { FC } from 'react';
import './style.css';

type Props = {
  text: string;
};

const InputBox: FC<Props> = ({ text }: Props) => (
  <div className="InputBox">
    <input type="text" value={text} />
    <button type="button">登録</button>
  </div>
);

export default InputBox;
