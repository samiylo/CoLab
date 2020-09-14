export default function (url) {

    return (dispatch) => {
        fetch('https://www.virustotal.com/vtapi/v2/url/scan', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(url)
        })
        .then(response => response.json())
        .then(company =>  dispatch({type: 'ADD_APPLICATION', payload: company}))
    }
}