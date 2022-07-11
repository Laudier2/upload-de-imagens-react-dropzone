export function addPlace(data, token) {
    return request("/", { data, token, method: "POST" })
}

export function UploadImagem(imagem) {

    const forData = new FormData()
    formData.append("fike", imagem)
    formData.append("upçoad_preset", "qrmenu_photos")

  return fetch("http://localhost:3000", {
      method: "POST",
      body: formData,
  }).then((res) => {
      return res.json()
  })
}
