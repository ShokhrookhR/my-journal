import React from 'react';
import clsx from 'clsx';

import { Navbar } from '../Navbar/Navbar';
import { SideComments } from '../SideComments/SideComments';

export const MainLayout = ({ children, contentFullWidth, hideComments, className }) => {
  return (
    <div className={clsx('pt-[80px]', className)}>
      <div className="container flex gap-5">
        <div className="">
          <Navbar />
        </div>
        <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
        {!hideComments && (
          <div className="">
            <SideComments />
          </div>
        )}
      </div>
    </div>
  );
};
