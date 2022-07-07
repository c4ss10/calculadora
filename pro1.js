const fmr = document.querySelector("form")
const resp = document.querySelector("h3")

fmr.addEventListener("submit", (e)=>{
  e.preventDefault()
  const num1 = Number(fmr.inNum1.value)
  const operador = fmr.inOperador.value
  const num2 = Number(fmr.inNum2.value)

  let resultado = ""
  if (operador == "+") {
   resultado = num1 + num2 
   resp.innerText = `resultado: ${resultado}`
  } if (operador == "-") {
    resultado = num1 - num2
    resp.innerText = `resultado: ${resultado}`
  } if (operador == "/") {
    resultado = num1 / num2
    resp.innerText = `resultado: ${resultado}`
  } if (operador == "*") {
    resultado = num1 * num2
    resp.innerText = `resultado: ${resultado}`
  } else {
    resp.innerText = "operador invalido"
  }
  fmr.inNum1.value = ""
  fmr.inNum2.value = ""
  fmr.inOperador.value = ""
})