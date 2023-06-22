import React, { useState } from 'react';
import { FaRegBell, FaBell } from 'react-icons/fa';
import addNotification from 'react-push-notification';
import './ReminderBell.css';

const ReminderIcon = (props) => {
  const [isReminderSet, setIsReminderSet] = useState(false);

  const handleReminderClick = () => {
    setIsReminderSet(!isReminderSet);
    if (!isReminderSet) {
      addNotification({
        title: 'Reminder',
        // subtitle: 'This is a subtitle',
        message: props.solution,
        theme: 'darkblue',
        native: false // when using native, your OS will handle theming.
      });
    }
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
