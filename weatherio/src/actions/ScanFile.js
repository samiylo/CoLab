export default function ScanFile(file){
    return (dispatch) => {
        fetch('https://safebrowsing.googleapis.com/v4/threatLists?key=AIzaSyAeF4FccVzvriwriD7pI__faA7_lh1zGdQ', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(file)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
}