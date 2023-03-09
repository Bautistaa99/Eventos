import React from 'react';
import './style.css';
import OnKeyDown from './OnKeyDown';
import OnChange from './OnChange';
import Contador from './Contador';

export default function App() {
  return (
    <div>
      <div>
        <OnKeyDown />
      </div>
      <div>
        <OnChange />
      </div>
      <div>
        <Contador />
      </div>
    </div>
  );
}
