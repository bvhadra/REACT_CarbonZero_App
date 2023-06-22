import React, { useState } from 'react';
import { FaRegBell, FaBell } from 'react-icons/fa';
import './ReminderBell.css';

const ReminderIcon = () => {
  const [isReminderSet, setIsReminderSet] = useState(false);

  const handleReminderClick = () => {
    setIsReminderSet(!isReminderSet);
  };

  return (
    <div>
      {isReminderSet ? (
        <FaBell
          onClick={handleReminderClick}
          className="reminder-icon filled"
        />
      ) : (
        <FaRegBell
          onClick={handleReminderClick}
          className="reminder-icon"
        />
      )}
    </div>
  );
};

export default ReminderIcon;
