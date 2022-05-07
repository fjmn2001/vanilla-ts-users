import "./styles.css"

const createAlert = (type: string, message: string) => {
  const div = document.createElement("div")
  div.classList.add("alert", `alert-${type}`)
  div.textContent = message
  return div
}

const createError = (message: string) => {
  return createAlert("error", message)
}

const createLoader = (message: string) => {
  return createAlert("info", message)
}

const createSuccess = (message: string) => {
  return createAlert("success", message)
}

export default {
  createError,
  createLoader,
  createSuccess,
}
