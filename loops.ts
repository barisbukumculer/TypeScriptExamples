let cities = ["Bursa", "Ankara", "Izmir"];

for (let i in cities) {
  console.log(i); // 0, 1, 2
}

for (let i of cities) {
  console.log(i); // Bursa, Ankara, Izmir
}
