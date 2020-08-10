import React from "react";
import NavBar from "../NavBar";
import Calendar from "react-calendar";
 
const Calendar = () => {
  return (
    <div className="CalendarPage">
      <NavBar />
      <div>
        <h2>Your Calendar</h2>
      </div>
    </div>
  );
};

render(<ReactCalendar/>, document.querySelector("#root"));
export default Calendar;