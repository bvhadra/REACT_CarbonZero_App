import React from 'react';

export const TotalContext = React.createContext({
    total: { travel: 0, food: 0, energy: 0 },
    setTotal: () => {}
  });
  