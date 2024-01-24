import React, { Fragment } from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

interface ILayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <Fragment>
      <TopBar />
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar />
        <div>{children}</div>
      </div>
    </Fragment>
  );
};

export default LayoutMain;
