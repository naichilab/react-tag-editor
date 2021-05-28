import { FC } from 'react';
import TagName from './TagName';
import './TagNameCollection.css';

type Tag = {
  name: string;
  lock: boolean;
};

type Props = {
  tags: Tag[];
};

const TagNameCollection: FC<Props> = ({ tags }: Props) => (
  <div className="TagNameCollection">
    {tags.map((tag) => (
      <TagName name={tag.name} lock={tag.lock} />
    ))}
  </div>
);

export default TagNameCollection;
