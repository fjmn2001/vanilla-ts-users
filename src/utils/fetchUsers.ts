import { User } from "../types/User"

export const fetchUsers = async (): Promise<Array<User>> => {
  try {
    const response = await fetch("https://reqres.in/api/users")
    const data = await response.json()

    return data.data as Array<User>
  } catch (e) {
    console.log(e)
    return []
  }
}
