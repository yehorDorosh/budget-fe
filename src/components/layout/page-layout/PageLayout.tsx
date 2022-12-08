import React from 'react';

const PageLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return <main className="container">{props.children}</main>;
};

export default PageLayout;
