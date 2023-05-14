import React from 'react';

import Child from './Child';

export default function index() {
  console.log('parent render');

  const [num, setNum] = React.useState(0);

  return (
    <div onClick={() => setNum(1)}>
      <Child />
    </div>
  );
}
