const requestDesktopData = (url) => {
    fetch(url)
    .then(response => {
        console.log(response)
    })
  
}

export default requestDesktopData

