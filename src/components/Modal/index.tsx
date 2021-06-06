/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC } from 'react';
import './style.css';

type Props = {
  show: boolean;
  text: string;
  onOverlayClick: () => void;
  buttons: {
    label: string;
    onClick: () => void;
    className?: string;
  }[];
};

const Modal: FC<Props> = ({ show, text, onOverlayClick, buttons }: Props) => (
  <div className="Modal">
    {show && (
      <div className="overlay" onClick={onOverlayClick}>
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <p>{text}</p>
          {buttons.map((b) => (
            <button
              type="button"
              className={b.className}
              onClick={(e) => {
                e.preventDefault();
                b.onClick();
              }}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default Modal;
