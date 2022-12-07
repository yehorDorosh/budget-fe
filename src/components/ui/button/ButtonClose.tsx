import React from 'react';

interface ButtonCloseProps {
  onClosing(): void;
}

const ButtonClose: React.FC<ButtonCloseProps> = (props) => {
  return (
    <button
      type="button"
      className="btn-close"
      aria-label="Close"
      onClick={props.onClosing}
    ></button>
  );
};

export default ButtonClose;
