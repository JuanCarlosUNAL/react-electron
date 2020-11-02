import React from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  title: string;
}

const FakeContainer: React.FC<Props> = ({ title }) => {
  const params = useParams<any>();
  const paramsList = Object.entries(params).map(([key, value]) => (
    <li key={key} >
      <strong>{key}: </strong>
      {value}
    </li>
  ));
  return (
    <div>
      <h1>fake Screen: {title}</h1>
      <ul>
        {paramsList}
      </ul>
    </div>
  );
};

export default FakeContainer;
