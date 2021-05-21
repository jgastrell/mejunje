<<<<<<< HEAD
=======
function counter() {
  let counter = 0;

    return {
        add(increment) {
            counter += increment;
        },
        retrieve() {
            return counter
        }
    }
}
>>>>>>> 99062efb6f79e1b465ed1a322129bbb065dd707c


myCounter.add(3);
myCounter.add(2);
myCounter.add(1);
console.log(myCounter.retrieve()); // returns 6


