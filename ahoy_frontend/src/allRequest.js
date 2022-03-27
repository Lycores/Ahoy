const requestDesktopData = async (url) => {
    try{
        const res = await fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            return json;
        })
        console.log(res)}
    catch(e){
        console.log(e)
    }
}

export default requestDesktopData

