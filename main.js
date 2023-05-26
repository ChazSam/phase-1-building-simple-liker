// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector("#modal")
errorModal.classList.add("hidden")


function clickAlert(){
  const heartSelector = document.querySelectorAll(".like-glyph")

  heartSelector.forEach((like) => {
    like.addEventListener("click", () => {
      mimicServerCall()

      .then(() => {
        console.log("pass")
        console.log(like.classList.value)

           if(like.classList.contains("activated-heart")){

             like.classList.remove("activated-heart")
             like.innerHTML =EMPTY_HEART;
           }else{
              like.classList.add("activated-heart")
              like.innerHTML = FULL_HEART;
       }
      })

      .catch(()=> {
        console.log("error")
        errorModal.classList.remove("hidden")
        setTimeout(() => {errorModal.classList.add("hidden")}, 3000)
       
      })

     
    })
  })
}
clickAlert();



  

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
