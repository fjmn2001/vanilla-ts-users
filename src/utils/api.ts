export default {
  get: async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Error en la llamada")
    }
    const json = await response.json()
    return json.data
  },
  post: async <T>(url: string, data: T) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error("Error en la llamada")
    }
    const json = await response.json()
    return json.data
  },
}
