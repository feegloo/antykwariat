import fetch from 'node-fetch'

(async () => {
    fetch('https://api2.isbndb.com/book/9788380080157', {
        method: 'get',
        headers: {
            "Content-Type": 'application/json', 
            'Authorization': '44151_dbd862b620e23d6ab5c3971156ce35a9' 
        },
    })
    .then(res => res.json())
    .then(json => console.log(json));
})()

// cd $HOME/.local/bin
// ./isbn_meta 9788380080157