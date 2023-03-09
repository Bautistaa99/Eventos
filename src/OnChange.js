import React, { useState } from 'react';

const OnChange = () => {
  const [value, setValue] = useState('');

  const onChangeHandler = (ev) => {
    const val = ev.target.value;
    const filtered = val.replace(/[aeiou]/gi, '');

    setValue(filtered);
  };

  return (
    <div>
      <label>Input:</label>
      <input onChange={onChangeHandler} value={value} />
    </div>
  );
};

export default OnChange;
