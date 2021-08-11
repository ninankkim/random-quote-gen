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