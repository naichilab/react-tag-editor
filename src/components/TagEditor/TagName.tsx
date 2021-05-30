import { FC, MouseEventHandler } from 'react';
import './TagName.css';
import lockimg from './lock.png';
import unlockimg from './unlock.png';

type Props = {
  tagName: string;
  showLock: boolean;
  showUnlock: boolean;
  showDelete: boolean;
  onLockClick: MouseEventHandler<HTMLButtonElement>;
  onUnlockClick: MouseEventHandler<HTMLButtonElement>;
  onDeleteClick: MouseEventHandler<HTMLButtonElement>;
};

const TagName: FC<Props> = ({
  tagName,
  showLock,
  showUnlock,
  showDelete,
  onLockClick,
  onUnlockClick,
  onDeleteClick,
}: Props) => (
  <div className="TagName">
    <div className="TagName-Contents">
      <div className="TagName-Text">{tagName}</div>
      {showLock && (
        <button
          type="button"
          className="TagName-LockButton"
          onClick={onLockClick}
        >
          <img src={lockimg} alt="" />
        </button>
      )}
      {showUnlock && (
        <button
          type="button"
          className="TagName-LockButton"
          onClick={onUnlockClick}
        >
          <img src={unlockimg} alt="" />
        </button>
      )}
      {showDelete && (
        <button
          type="button"
          onClick={onDeleteClick}
          className="TagName-Delete clearText"
        >
          Delete
        </button>
      )}
    </div>
  </div>
);

export default TagName;
