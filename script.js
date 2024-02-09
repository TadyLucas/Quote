const quoteText = document.querySelector(".quote")
const quoteCopy = document.getElementById("quote")
const quoteAutor = document.querySelector(".autor")
let nxtBtn = document.querySelector("#next-quote")
let volumeBtn = document.querySelector(".sound")
let copyBtn = document.querySelector(".copy")
let twitterBtn = document.querySelector(".twitter")


function randomQuote(){
   nxtBtn.innerText = "Loading Quote..."
   
   fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
   console.log(result)
   
   if(quoteText.innerText = result.length >= 112){
      quoteText.innerText = result.content
      quoteAutor.innerHTML = result.author
      
      nxtBtn.innerText = "New Quote"
      console.log(result.content.length)
      result.content = result.content
      quoteText.style.fontSize = "24px"

      
   }else if(quoteText.innerText = result.length <= 112){
      quoteText.innerText = result.content
      quoteAutor.innerHTML = result.author
      nxtBtn.innerText = "New Quote"
      console.log(result.content.length)
      quoteText.style.fontSize = "30px"

      

   }
   
   
   })
}



volumeBtn.addEventListener("click", ()=>{
   let speaker = new SpeechSynthesisUtterance(`${quoteText.innerText}`)
   speechSynthesis.speak(speaker)
})
copyBtn.addEventListener("click", ()=>{
   navigator.clipboard.writeText(quoteText.innerText)
})
twitterBtn.addEventListener("click", ()=>{
   let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
   window.open(tweetUrl, "_blank")
})
nxtBtn.addEventListener("click", randomQuote)
