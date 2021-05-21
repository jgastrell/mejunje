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

const myCounter = counter();

myCounter.add(3);
myCounter.add(2);
myCounter.add(1);
console.log(myCounter.retrieve()); // returns 6