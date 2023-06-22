import React, { useState } from 'react';
import { FaRegBell, FaBell } from 'react-icons/fa';
import addNotification from 'react-push-notification';
import '../Action/Action.css';

const ReminderIcon = (props) => {
  const [isReminderSet, setIsReminderSet] = useState(false);

  const handleReminderClick = () => {
    setIsReminderSet(!isReminderSet);
    if (!isReminderSet) {
      addNotification({
        title: 'Reminder',
        // subtitle: 'This is a subtitle',
        duration: 8000,
        message: props.solution,
        backgroundTop: 'darkgreen', //optional, background color of top container.
        backgroundBottom: 'green',
        colorTop: 'white', //optional, font color of top container.
    colorBottom: 'white', //optional, font color of bottom container.
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
