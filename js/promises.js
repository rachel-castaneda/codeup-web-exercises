"use strict";

const wait = (num) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (num > 2000 ) {
                resolve();
            } if (num %2 === 0) {
                resolve();
            } else {
                reject()
            }
        }, num);

    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait(5000).then(() => console.log('You\'ll see this after 5 seconds'));

