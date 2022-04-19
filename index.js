const $btns = document.querySelectorAll(".btn")
const $btnSubmit = document.querySelector(".btn-submit")
const $cardFront = document.querySelector(".front")
const $cardBack = document.querySelector(".back")
const $rankingText = document.querySelector(".ranking-text")

$btns.forEach((el) => {
  el.addEventListener("click", handleClick)
})

function handleClick(e) {
  let current = e.target

  current.classList.toggle("select")

  $btns.forEach((el) => {
    if (el.value !== current.value && el.classList.contains("select")) {
      el.classList.remove("select")
    }
  })
}

$btnSubmit.addEventListener("click", submitClick)

function submitClick() {
  $cardFront.style.display = "none"
  $cardBack.style.display = "inherit"
  let selectedValue = getValue()
  $rankingText.innerHTML = `You selected ${selectedValue} out of 5`
}

function getValue() {
  let val = 0
  $btns.forEach((el) => {
    if (el.classList.contains("select")) {
      val = el.value
    }
  })
  return val
}
