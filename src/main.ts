import "./style.css"
import { fetchUsers } from "./utils/fetchUsers"

// const app = document.querySelector<HTMLDivElement>("#app")!

fetchUsers().then((users) => {
  const tbody = document.querySelector<HTMLDivElement>("tbody")!
  users.forEach((user) => {
    tbody.innerHTML += `
    <tr>
      <th scope="row">${user.id}</th>
      <td>${user.first_name}</td>
      <td>${user.last_name}</td>
      <td>${user.email}</td>
    </tr>
    `
  })

  console.log(tbody.innerHTML)
})

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
