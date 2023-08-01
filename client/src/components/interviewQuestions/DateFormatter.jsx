
import React from "react";

function DateFormatter({ dateString }) {
  const getFormattedDate = (dateString) => {
    const currentDate = new Date();
    const date = new Date(dateString);

    if (isSameDay(currentDate, date)) {
      return "Today";
    } else if (isSameDay(getYesterday(currentDate), date)) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString("en-GB");
    }
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const getYesterday = (date) => {
    const yesterday = new Date(date);
    yesterday.setDate(date.getDate() - 1);
    return yesterday;
  };

  return <>{getFormattedDate(dateString)}</>;
}

export default DateFormatter;
