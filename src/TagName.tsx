import { FC } from 'react';
import './TagName.css';
import lockimg from './lock.png';
import close from './close.png';

type Props = {
  lock: boolean;
  name: string;
};

const TagName: FC<Props> = ({ name, lock }: Props) => (
  <div className="TagName">
    <div className="TagName-Contents">
      {lock && <img className="TagName-LockImg" src={lockimg} alt="" />}
      <div className="TagName-Text">{name}</div>
      <img className="TagName-Delete" src={close} alt="" />
    </div>
  </div>
);

export default TagName;
