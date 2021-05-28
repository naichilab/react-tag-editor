import { FC, MouseEventHandler } from 'react';
import './TagName.css';
import lockimg from './lock.png';
import unlockimg from './unlock.png';

type Props = {
  lock: boolean;
  name: string;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
};

const TagName: FC<Props> = ({ name, lock, onClickHandler }: Props) => (
  <div className="TagName">
    <div className="TagName-Contents">
      <div className="TagName-Text">{name}</div>
      <img
        className="TagName-LockImg"
        src={lock ? lockimg : unlockimg}
        alt=""
      />
      {!lock && (
        <button
          type="button"
          onClick={onClickHandler}
          className="TagName-Delete clearText"
        >
          Delete
        </button>
      )}
    </div>
  </div>
);

export default TagName;
