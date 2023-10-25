import React from 'react';
import ChipList from './ChipList';

const sampleChips = [
  { label: "123456" },
  { label: "1234567" },
  { label: "12345678" },
  { label: "12345" },
  { label: "123456789" }
];

const App = () => {
  return (
    <div>
      <h1>Chip List</h1>
      <ChipList chips={sampleChips} maxChips={3} maxTextLength={6} />
    </div>
  );
};

export default App;