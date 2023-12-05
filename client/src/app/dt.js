{/* <input type="text" placeholder="Search..." class="input" />
<h5>
Default : <span class = "default"></span>
</h5>
<h5>
Debounce : <span class = "debounce"></span>
</h5>
<h5>
Throttle : <span class = "throttle"></span>
</h5> 


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="script.js" defer></script>
</head>
<body>
  <input type="text">
  <div>
    <b>Default:</b>
    <span id="default"></span>
  </div>
  <div>
    <b>Debounce:</b>
    <span id="debounce"></span>
  </div>
  <div>
    <b>Throttle:</b>
    <span id="throttle"></span>
  </div>
</body>
</html>
*/}

// const input = document.querySelector("input");
// const defaultText = document.querySelector(".default");
// const debounceText = document.querySelector(".debounce");
// const throttleText = document.querySelector(".throttle");

// const updateDebounceText = debounce(text => {
// debounceText.textContent = text
// }, 1000);

// const updateThrottleText = throttle(text => {
// throttleText.textContent = text
// }, 1000);

// input.addEventListener("input", e => {
// defaultText.textContent = e.target.value;
// updateDebounceText(e.target.value);
// updateThrottleText(e.target.value);
// });

// function debounce(cd, delay){
// let timer;

// return (...args) => {
// clearTimeout(timer);
// timer = setTimeout(()=>{
// cd(...args)
// }, delay)
// }
// }

// function throttle(cd, delay){
// let shouldWait = false;
// let waitingArg;
// const timeoutFun = ()=>{
// if(waitingArg == null){
// shouldWait = false
// }else{
// cd(...waitingArg);
// waitingArg = null;
// setTimeout(timeoutFun,delay);
// }
// }

// return (...arg) => {
// console.log(arg)
// if(shouldWait) {
// waitingArg = arg;
// return
// }

// cd(...arg);
// shouldWait = true

// setTimeout(timeoutFun,delay)
// }
// }

// document.addEventListener("mousemove", e => {
// incrementCount(defaultText)
// });

// function incrementCount(element){
// element.textContent = (parseInt(element.innerText) || 0) + 1
// }



// copied one

const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce(() => {
  incrementCount(debounceText)
})
const updateThrottleText = throttle(() => {
  incrementCount(throttleText)
}, 100)

function debounce(cb, delay = 1000) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

function throttle(cb, delay = 1000) {
  let shouldWait = false
  let waitingArgs
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true

    setTimeout(timeoutFunc, delay)
  }
}

document.addEventListener("mousemove", e => {
  incrementCount(defaultText)
  updateDebounceText()
  updateThrottleText()
})

function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1
}