const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()


async function generateJoke() {
    const config = {
        headers: {
            'Accept':'application/json'
        }
    }

    // await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(res => res.json())
    // .then(json => console.log(json)
    // )

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    console.log(data.title)
    
    

    // let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let user = res.json()
    // console.log(user)
// REFACTORED CORRECT
//   const res = await fetch('https://icanhazdadjoke.com',config)
//     const data = await res.json()
//     jokeEl.innerHTML = data.joke
//   const res = await fetch('https://icanhazdadjoke.com',config)
//     const data = await res.json()
//     jokeEl.innerHTML = data.joke

// 
   
}

// PROMISE
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept':'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => { 
//         jokeEl.innerHTML = data.joke
//     })
// }