import { FC } from 'react';
import './TagName.css';
import lockimg from './lock.png';

type Props = {
  lock: boolean;
  name: string;
};

const TagName: FC<Props> = ({ name, lock }: Props) => (
  <div className="TagName">
    <div className="TagName-Contents">
      <div className="TagName-Text">{name}</div>
      {lock && <img className="TagName-LockImg" src={lockimg} alt="" />}
      {!lock && <div className="TagName-Delete" />}
    </div>
  </div>
);

export default TagName;
