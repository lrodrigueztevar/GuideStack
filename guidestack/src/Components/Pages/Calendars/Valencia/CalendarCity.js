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
      currentMonth={new Date("2021-01-01T22:00:00.000Z")}
      onCurrentMonthChange={function noRefCheck() {}}
    >
      <MonthlyNav />
      <MonthlyBody
        events={[
          {
            date: new Date("2021-06-07T14:05:40.715Z"),
            title: "Call John",
          },
          {
            date: new Date("2021-06-07T15:05:40.715Z"),
            title: "Call John",
          },
          {
            date: new Date("2021-06-07T16:05:40.715Z"),
            title: "Meeting with Bob",
          },
        ]}
        renderDay={function noRefCheck() {}}
      />
    </MonthlyCalendar>
  );
};
export default CalendarCity;
