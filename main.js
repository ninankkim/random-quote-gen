let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Love For All, Hatred For None." -Khalifatul Masih III',
    '"Change the world by being yourself." -Amy Poehler',
    '"Every moment is a fresh beginning." -T.S Eliot',
    '"The best k-pop group is hands down, Mamamoo." -Nina Kim',
    '"Coding is hard and annoying, nothing ever works." -Anon',
    '"Dogs are better than cats, that is just facts." -Someone',
];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})

// in the first three lines, we declared 3 variables using let
// let allows you to declare variables that are limited to the scope of the block statement

// we used the getelementbyid which returns an element object representing the element whos id property matches the string
// since element ids are specific to just that one, its a useful way to get access to a specific element quickly
// we did let quotes, and made an array filled with strings of quotes that will appear

// the addeventlistener takes the event to listen for and be called whenever the described event gets fired
// and it allows you to set up functions to be called when a specific event happens and we attached it with a 'click'

// the math.floor is a function that returns the largest integer less than or equal to a given number
// and when you add a math.random it will shuffle through and return those in random order
// and the length property returns an integer value that represents the number of characters in the string
// if the string is an empty string, the length property will return to 0