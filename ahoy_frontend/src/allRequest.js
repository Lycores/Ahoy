const requestDesktopData = (url) => {
    console.log(url)
    fetch("http://localhost:4000", {method: 'GET'})
    .then(response => response.text())
  .then(json => console.log(json))
}

export default requestDesktopData

