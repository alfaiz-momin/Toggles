//using selectors inside the element

// querySelectorAll this will add all elements that have the class and create an Array
const btns = document.querySelectorAll(".question-btn")

// Note forEach only work on Array
btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement

    question.classList.toggle("show-text")
  })
})

// traversing the dom
