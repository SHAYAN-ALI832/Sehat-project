import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ value }) => {
  return (
    <div style={{ width: 100, height: 150 }}> 
      <CircularProgressbar 
        value={value}
        text={`${value}%`}
        styles={{
          root: { backgroundColor: '' }, // Red background color
          path: { stroke: 'blue', strokeWidth: 6 },
          trail: { stroke: '#d6d6d6', strokeWidth: 6 },
          text: { fill: 'blue', fontSize: '16px', fontWeight: 'bold' },
        }}
      />
    </div>
  );
};

export default CircularProgressBar;
