class Person {
  constructor(name) {
    this.name = name;
    // Запуск таймера за 5 секунд
    setTimeout(() => {
      this.name = null;
    }, 5000);
  }

  // Зупинка таймера
  stopTimer() {
    clearTimeout(this.timer);
    this.timer = null;
  }
}

const person = new Person("Іван");
console.log(person.name); // Іван

// Зупинка таймера
person.stopTimer();
console.log(person.name); // null
