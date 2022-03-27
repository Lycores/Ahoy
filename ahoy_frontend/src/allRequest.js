const requestDesktopData = async (url) => {
        const res = await fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            return json;
        })
        console.log(res)
}

export default requestDesktopData

