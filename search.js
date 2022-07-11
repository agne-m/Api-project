let queryParams = document.location.search
let urlParams = new URLSearchParams(queryParams)
let searchPhrase = urlParams.get('search-input')

let searchResults = document.querySelector('#search-results')
let usersList = document.createElement('ul')

console.log(searchForm)

searchResults.append(usersList)

fetch(`https://jsonplaceholder.typicode.com/users?username_like=${searchPhrase}`)
    .then(res => res.json())
    .then(users => {
        if (users.length > 0) {
            users.map(user => {
                let userItem = document.createElement('li')
                userItem.innerHTML = `
                <a href="./user.html?user_id=${user.id}">${user.name}</a>
                `
                usersList.append(userItem)
        })
        } else {
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchPhrase}`)
                .then(res => res.json())
                .then(usersByName => {
                    if (usersByName.length > 0) {
                        usersByName.map(userByName => {
                            let userItem = document.createElement('li')
                            userItem.innerHTML = `
                            <a href="./user.html?user_id=${userByName.id}">${userByName.name}</a>
                            `
                            usersList.append(userItem)
                    })
                    }
                })
            }
            
        })
        
        fetch(`https://jsonplaceholder.typicode.com/users?email_like=${searchPhrase}`)
            .then(res => res.json())
            .then(usersByEmail => {
                if (usersByEmail.length > 0) {
                    usersByEmail.map(userByEmail => {
                        let userItem = document.createElement('li')
                        userItem.innerHTML = `
                        <a href="./user.html?user_id=${userByEmail.id}">${userByEmail.name}</a>
                        `
                        usersList.append(userItem)
                })
                } 
            })

        
            fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${searchPhrase}`)
            .then(res => res.json())
            .then(postsByTitle => {
                if (postsByTitle.length > 0) {
                    postsByTitle.map(postByTitle => {
                        let userItem = document.createElement('li')
                        userItem.innerHTML = `
                        <a href="./user.html?post_id=${postByTitle.id}">${postByTitle.body}</a>
                        `
                        usersList.append(userItem)
                })
                } 
            })
            
            fetch(`https://jsonplaceholder.typicode.com/albums?title_like=${searchPhrase}`)
            .then(res => res.json())
            .then(albumsByTitle => {
                console.log(albumsByTitle)
                if (albumsByTitle.length > 0) {
                    albumsByTitle.map(albumByTitle => {
                //         console.log(postByTitle)
                        let userItem = document.createElement('li')
                        userItem.innerHTML = `
                        <a href="./user.html?album_id=${albumByTitle.id}">${albumByTitle.title}</a>
                        `
                        usersList.append(userItem)
                })
                } 
            })
