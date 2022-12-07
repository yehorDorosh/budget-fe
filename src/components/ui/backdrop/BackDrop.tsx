import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

interface BackDropProp {
  timeout: number;
  show: boolean;

  onClick(): void;
}

const BackDrop: React.FC<BackDropProp> = (props) => {
  const container = document.getElementById('backdrops');
  if (!container) return null;
  return (
    ReactDOM.createPortal(
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={props.timeout}
        classNames={{
          enter: 'showing',
          enterActive: 'showing',
          enterDone: 'show',
          exit: 'hiding',
          exitActive: 'hiding',
          exitDone: '',
        }}
      >
        <div className="offcanvas-backdrop fade" onClick={props.onClick} />
      </CSSTransition>,
      container
    )
  );
};

export default BackDrop;
