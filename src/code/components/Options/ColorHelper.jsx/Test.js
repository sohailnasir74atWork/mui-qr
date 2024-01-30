import React from 'react';

import ReactGPicker from 'react-gcolor-picker';

function Test() {
  const onChange = (value) => {
    console.log(value);
  };

  return <ReactGPicker value='red' onChange={onChange} />;
}

export default Test;