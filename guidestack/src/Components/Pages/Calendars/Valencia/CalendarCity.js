import { format, subHours, startOfMonth } from "date-fns";
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from "@zach.codes/react-calendar";
const CalendarCity = () => {
  return (
    <MonthlyCalendar
      currentMonth={new Date("2021-05-31T22:00:00.000Z")}
      onCurrentMonthChange={function noRefCheck() {}}
    >
      <MonthlyNav />
      <MonthlyBody
        events={[
          {
            date: new Date("2021-06-08T19:22:30.830Z"),
            title: "Call John",
          },
          {
            date: new Date("2021-06-08T20:22:30.830Z"),
            title: "Call John",
          },
          {
            date: new Date("2021-06-08T21:22:30.831Z"),
            title: "Meeting with Bob",
          },
        ]}
        renderDay={function noRefCheck() {}}
      />
    </MonthlyCalendar>
  );
};
export default CalendarCity;
