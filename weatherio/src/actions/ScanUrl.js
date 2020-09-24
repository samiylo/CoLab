export default function ScanUrl() {

    let apikey = 'AIzaSyAeF4FccVzvriwriD7pI__faA7_lh1zGdQ'

    return (dispatch) => {
        fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apikey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(res => console.log(res))
    }
}
