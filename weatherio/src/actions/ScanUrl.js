export default function (url) {

    // apikey': '899f21daff4d9af4bcec147c4ae9b9b71b8244db0dd91c70ed4c030f266e8c3d'
    let id = 'https://www.youtube.com'
    return (dispatch) => {
        fetch(`https://www.virustotal.com/api/v3/urls/${id}/analyse`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type' : 'application/json',
                'x-apikey' : '899f21daff4d9af4bcec147c4ae9b9b71b8244db0dd91c70ed4c030f266e8c3d',
                // 'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(id)
        })
        .then(response => response.json())
        .then(res => console.log(res))
    }
}