import React from 'react';
import { Link } from 'react-router-dom';

import enhancer from './enhancer';
import { Props } from './types';

const PostsScreen: React.FC<Props> = ({className}) => (
  <div className={className}>
    <div className="navbar">
      <Link to="/">Salir</Link>
    </div>
    <div className="box">
      time, title, description, edit, delete
    </div>
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
  </div>
);

export default enhancer(PostsScreen);
