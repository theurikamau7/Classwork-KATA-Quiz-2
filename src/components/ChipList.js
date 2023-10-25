import React from 'react';

const ChipList = ({ chips = [], maxChips = Infinity, maxTextLength = Infinity }) => {
  if (!chips || chips.length === 0 || maxChips <= 0 || maxTextLength <= 0) {
    return <React.Fragment />;
  }

  const displayedChips = chips.slice(0, maxChips);

  const isTruncated = displayedChips.map(chip => chip.length > maxTextLength);

  return (
    <div>
      {displayedChips.map((chip, index) => (
        <div key={index} className="chip">
          {isTruncated[index]
            ? chip.slice(0, maxTextLength) + '...'
            : chip}
        </div>
      ))}
  
      {chips.length > maxChips && (
        <aside data-testid="exceeding-text">
          {chips.length - maxChips} chips not shown
        </aside>
      )}
    </div>
  );
  };

export default ChipList;
