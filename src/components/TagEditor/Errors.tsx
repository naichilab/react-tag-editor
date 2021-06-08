import { FC } from 'react';
import './Errors.css';

type Props = {
  errors: string[];
  clearHandler: () => void;
};

const Errors: FC<Props> = ({ errors, clearHandler }: Props) => (
  <div className="TagEditor-Errors">
    {errors.map((error) => (
      <div className="Error">{error}</div>
    ))}
    {errors.some(() => true) && (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          clearHandler();
        }}
      >
        クリア
      </button>
    )}
  </div>
);

export default Errors;
