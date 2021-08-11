let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Fuck bitches, get money." - Lil Wayne',
    '"Jesus take the wheel, please." -Carry Underhood',
    '"Get off my dick." -J.Cole',
    '"The best k-pop group is hands down, Mamamoo." -Nina Kim',
    '"Coding is hard and annoying, nothing ever works." -Anon',
    '"Dogs are better than cats, that is just facts." -Someone',
];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})