const puppy = 'Toby';

const obj = {
    number: 21,
    name: 'Duncan',
    team: 'Spurs'
};

const multiply = (num1, num2) => {
    let sum = 0;
    for (let i=0; i<num2;i++){
        sum += num1;
    }
    console.log('multiplied');
    return sum;
}

module.exports = {obj, multiply, puppy};