import React from 'react';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const OnKeyDown = () => {
  const onKeyDownHandler = (ev) => {
    if (vowels.includes(ev.key)) {
      ev.preventDefault();
    }
  };

  return (
    <div>
      <label>Input:</label>
      <input onKeyDown={onKeyDownHandler}></input>
    </div>
  );
};

export default OnKeyDown;
