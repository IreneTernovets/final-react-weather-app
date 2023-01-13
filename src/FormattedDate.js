export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    return (hour = `0${hour}`);
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    return (minute = `0${minute}`);
  }
  return `${day} ${hour}:${minute}`;
}
