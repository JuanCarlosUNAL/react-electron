import React from 'react';
import { Link } from 'react-router-dom';

import enhancer from './enhancer';
import { Props } from './types';



const PostsScreen: React.FC<Props> = ({className}) => (
  <div className={className}>
    <div className="navbar">
      <Link to="/">Salir</Link>
      <button>New</button>
    </div>
    <div className="box">
      <h1>2:30:47</h1>
      <h3>title</h3>
      <p>Nostrud aliqua nulla ad duis ut excepteur ipsum laboris.</p>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  </div>
);

export default enhancer(PostsScreen);
