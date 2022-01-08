function updateClock() {
  var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var m = new Date();
  var dateString =
    days[m.getDay()] +
    " " +
    ("0" + m.getDate()).slice(-2) +
    "/" +
    ("0" + (m.getMonth() + 1)).slice(-2) +
    "/" +
    m.getFullYear() +
    " " +
    ("0" + m.getHours()).slice(-2) +
    ":" +
    ("0" + m.getMinutes()).slice(-2) +
    ":" +
    ("0" + m.getSeconds()).slice(-2);
  document.getElementById("time").innerHTML = dateString;
  setTimeout(updateClock, 1000);
}
