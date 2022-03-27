const requestDesktopData = (url) => {
    fetch(url, {method: 'GET'})
    .then(response => response.text())
  .then(json => console.log(json))
  console.log(url)
  
}

export default requestDesktopData

