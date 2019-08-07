let seconds = 0;
let counter = document.querySelector("#counter")


//// Incrementing the counter
function incrementSeconds() {
    seconds += 1;
    counter.innerText = `${seconds}`;
}

/// call incrementSeconds for every second
let cancel = setInterval(incrementSeconds, 1000);

/// call incrementSeconds for every "+" clicked
const likeButton = document.getElementById("+")
likeButton.addEventListener('click', function(e){
    incrementSeconds()
})

/// call decrementSeconds
const dislikeButton = document.getElementById("-")
function decrementSeconds() {
    if (seconds >= 1){
    seconds -= 1;
    }
    counter.innerText = `${seconds}`;
}
dislikeButton.addEventListener('click', function(e){
    decrementSeconds()
})

//// Like button
const loveButton = document.getElementById("<3");
let likeList = document.querySelector(".likes");
let arr = [];
loveButton.addEventListener("click", function(e) {
  let found = document.getElementById(`${counter.innerText}`);
  if (found) {
    let objectFoundInArray = arr.find(function(element) {
      return element.id === found.id;
    });
    objectFoundInArray.like++;
    found.innerText = `Number ${counter.innerText} was liked ${objectFoundInArray.like} times.`;
  } else {
    arr.push({ like: 1, id: `${counter.innerText}` });
    likeStatement = document.createElement("li");
    likeStatement.setAttribute("id", `${counter.innerText}`);
    likeStatement.innerText = `Number ${counter.innerText} was liked 1 time.`;
    likeList.append(likeStatement);
  }
});

const allButtons = document.getElementsByClassName("change")
let pause = document.querySelector("#pause");
let start = pause.addEventListener("click", function (e) {
  if (pause.innerText === "resume") {
    for (let button of allButtons) {
      button.removeAttribute("disabled")
    }
    pause.innerText = "pause";
    cancel = setInterval(incrementSeconds, 1000);
  } else {
    for (let button of allButtons) {
      button.setAttribute("disabled", "")
    }
    pause.innerText = "resume";
    clearInterval(cancel);
  }
});


const input = document.querySelector("#input")
const comments = document.querySelector("#list")
const submit = document.querySelector("#submit")
submit.addEventListener('click', function(e){
    e.preventDefault()
    let comment = document.createElement("li")
    comment.innerText = input.value
    comments.append(comment)
    let form = document.querySelector("#comment-form")
    form.reset()
    // input.value = ""
})