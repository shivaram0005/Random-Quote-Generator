document.querySelector(".generate-quote").addEventListener("click", ()=>{
    let quotes = {
        " — Carol Burnett" : '"When you have a dream, you\'ve got to grab it and never let go."',
        " — Audrey Hepburn" : ' "Nothing is impossible. The word itself says \'I\'m possible!\'"',
        " — Alexander the Great" : ' "There is nothing impossible to they who will try."',
        " — Michael Altshuler" : '  "The bad news is time flies. The good news is you\'re the pilot."',
        "  — Nicole Kidman" : ' "Life has got all those twists and turns. You\'ve got to hold on tight and off you go."',
        " — Walt Whitman" : '  "Keep your face always toward the sunshine, and shadows will fall behind you."',
        " - Winston Churchill" : ' "Success is not final, failure is not fatal: it is the courage to continue that counts."',
        "  — Oprah Winfrey" : '  "You define your own life. Don\'t let other people write your script."',
        " — Malala Yousafzai" : ' "You are never too old to set another goal or to dream a new dream."',
        " — Mother Teresa" : '  "Spread love everywhere you go."',
    }

    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];  //keys
    let quote = quotes[author]; //values
    document.querySelector(".quote").innerHTML = quote;
    document.querySelector(".quote-author").innerHTML = author;
})