const prevBtns = document.querySelectorAll(".btn-prev"); // el metodo selecciona el elemento.
const nextBtns = document.querySelectorAll(".btn-next"); // btn-prev - btn-next son tipo clase de selector.
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => { //El metodo  se comporta como un bucle asi nuestro evento click
  btn.addEventListener("click", () => {//ese evento pertence al boton siguiente
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => { // El metodo  se comporta como un bucle asi nuestro evento click
  btn.addEventListener("click", () => { //ese evento pertence al boton retroceder
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {  //activamos activar la linea en  progreso
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() { //progreso de del pregress bar
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}