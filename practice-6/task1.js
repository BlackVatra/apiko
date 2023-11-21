function isString(callback, value) {
  if (typeof value !== "string" || typeof callback !== "function") {
    console.error("Значення має бути стрічкою, а колбек - функцією");
    return;
  }

  callback(value);
}

isString(function (value) {
  console.log("Значення: ", value);
}, "Це стрічка");

// Вивід:
// Значення: Це стрічка
