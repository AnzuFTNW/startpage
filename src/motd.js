const motds = [
  "ur mom is hitler",
  "vodka vodka",
  "baro is my city",
  "prayge",
  "zhe dong in your mao",
  "stalin is proud of you",
  ":flushed:",
  "soviet sink",
];

function randomMotd() {
  var size = motds.length;
  var x = Math.floor(size * Math.random());
  document.getElementById("motd").innerHTML = motds[x];
}
