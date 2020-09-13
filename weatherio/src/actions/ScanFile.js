export function ScanFile(file){
    return (dispatch) => {
        fetch('https://www.virustotal.com/vtapi/v2/file/scan', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(application)
        })

    }
}