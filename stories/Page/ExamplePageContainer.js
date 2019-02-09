import React from 'react';
import s from './ExamplePageContainer.scss';

/* This layout try to immitate the current BusinessManager's layout and styles. */

export const ExamplePageContainer = ({ children }) => (
  <div className={s.root}>
    <div className={s.header} />
    <div className={s.body}>
      <div className={s.sideBar}>SideBar</div>
      <div className={s.pageContainer}>{children}</div>
    </div>
  </div>
);