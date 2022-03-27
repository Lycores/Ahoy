const requestDesktopData = (url) => {
    console.log(url)
    fetch("/api", {method: 'GET'})
    .then(response => response.text())
  .then(json => console.log(json))
  
}

export default requestDesktopData

