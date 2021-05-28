import { FC, SyntheticEvent } from 'react';
import TagName from './TagName';
import './TagNameCollection.css';

type Tag = {
  name: string;
  lock: boolean;
};

type Props = {
  tags: Tag[];
  onTagDeleteHandler: (tagName: string) => void;
};

const TagNameCollection: FC<Props> = ({ tags, onTagDeleteHandler }: Props) => (
  <div className="TagNameCollection">
    {tags.map((tag) => (
      <TagName
        name={tag.name}
        lock={tag.lock}
        onClickHandler={(e: SyntheticEvent) => {
          e.preventDefault();
          onTagDeleteHandler(tag.name);
        }}
      />
    ))}
  </div>
);

export default TagNameCollection;
