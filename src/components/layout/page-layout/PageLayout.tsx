import React from 'react';

const PageLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="container">{props.children}</div>;
};

export default PageLayout;