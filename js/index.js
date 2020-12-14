//alert('Hello JavaScript!');

//let, const, var

let message = 'Hello World!';
//alert(message);

message = 'Nice to see you!';
alert(message);

let num = 42;
num = num + 1;
//alert(num);

const age = Number(promt('Enter your age'));
conts nextAge = add(age, 1); // -? /? *? %
alert(nextAge);

if (age <19) {
    alert('You are underaged!');
} else if(age <60) {
alert ('You are old');    
} else {
   alert( 'You are adult');
}

//const textMessage = age < 19 ? 'You are underaged' : 'You are adult!';
//alert(textMessage);

function add(a,b) {
        const result = a+b;
        return a+b;
}
