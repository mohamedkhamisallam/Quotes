
 let button = document.getElementById(`btn`);
 let display = document.getElementById(`display`)

let quotesArray=[

{quote:`The tyrant dies and his rule is over; the martyr dies and his rule begins.`,
author:  `Soren Kierkegaard` },
{quote:`I don't see why religion and science can't get along. What's wrong with counting our blessings with a computer?`,
author:  ` Robert Orben` },
{quote:`Optimism and humor are the grease and glue of life. Without both of them we would never have survived our captivity.`,
author:  ` Philip Butler` },
{quote:`The tyrant dies and his rule is over; the martyr dies and his rule begins.`,
author:  `Soren Kierkegaard` },
{quote:`I love the challenge of starting at zero every day and seeing how much I can accomplish.`,
author:  `Martha Stewart` },
{quote:`Every society honours its live conformists and its dead troublemakers.`,
author:  `Mignon McLaughlin` },
{quote:`You can lead a man up to the university, but you can't make him think.`,
author:  `Soren Kierkegaard` },
{quote:`Jealousy is all the fun you think they had.`,
author:  ` Erica Jong` },
{quote:`We are obliged to love one another. We are not strictly bound to "like" one another.`,
author:  `SThomas Merton` },


]




function getQuote()
{
   
  
  
     
}
getQuote()
button.addEventListener (`click`,function(){
    let random = Math.floor(Math.random()*quotesArray.length)
    document.getElementById(`quote`).innerHTML=quotesArray[random].quote;
    document.getElementById(`author`).innerHTML=quotesArray[random].author;
    display.classList.add(`d-none`)
})


