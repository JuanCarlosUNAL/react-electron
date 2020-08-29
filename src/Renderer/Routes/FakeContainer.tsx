import React from "react";

interface Props {
  title: string,
}

const FakeContainer: React.FC<Props> = ({title}) => {
return <h1>fake Screen: {title}</h1>
}

export default FakeContainer;