export default function (url) {

    // apikey': '899f21daff4d9af4bcec147c4ae9b9b71b8244db0dd91c70ed4c030f266e8c3d'
    let id = 'aHR0cHM6Ly93d3cueW91dHViZS5jb20'
    return (dispatch) => {
        fetch(`https://www.virustotal.com/vtapi/v2/url/scan`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'apikey' : '899f21daff4d9af4bcec147c4ae9b9b71b8244db0dd91c70ed4c030f266e8c3d',
                'url' : 'https://www.youtube.com'
            },
            // body: JSON.stringify(id)
        })
        .then(response => response.json())
        .then(res => console.log(res))
    }
}

// export default function (url) {

//     // apikey': '899f21daff4d9af4bcec147c4ae9b9b71b8244db0dd91c70ed4c030f266e8c3d'
//     let id = 'aHR0cHM6Ly93d3cueW91dHViZS5jb20'
//     return (dispatch) => {
//         fetch(`https://www.virustotal.com/api/v3/urls/${id}/analyse`, {
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'x-apikey' : '899f21daff4d9af4bcec147c4ae9b9b71b8244db0dd91c70ed4c030f266e8c3d',
//             },
//             // body: JSON.stringify(id)
//         })
//         .then(response => response.json())
//         .then(res => console.log(res))
//     }
// }