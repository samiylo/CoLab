export default function () {

    let url = 'https://www.youtube.com'
    let apikey = 'AIzaSyAeF4FccVzvriwriD7pI__faA7_lh1zGdQ'

    let data = {apikey, url}
    return (dispatch) => {
        fetch(`https://www.virustotal.com/vtapi/v2/url/scan`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'apikey' : '899f21daff4d9af4bcec147c4ae9b9b71b8244db0dd91c70ed4c030f266e8c3d',
                'url' : 'https://www.youtube.com'
            },
            body: data
        })
        .then(response => response.json())
        .then(res => console.log(res))
    }
}
