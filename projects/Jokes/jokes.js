const jokes = document.querySelector('#jokes')
const jokesBtn = document.querySelector('#jokesBtn')
const generatejokes = async () =>{
    try{
        const setHeader ={
            headers: {
                Accept : "application/json"
            }
        }
        // fetch('https://icanhazdadjoke.com/', setHeader)
        // .then((res) => res.json())
        // .then((data) =>{
        //     jokes.innerHTML = data.joke;
        // }).catch((error) =>
        // console.log(error))
        const res = await fetch('https://icanhazdadjoke.com/', setHeader)
        const data = await res.json();
        jokes.innerHTML = data.joke;
        }catch(err){
            console.log(` its shows an error ${err}`);
            }
        }
    jokesBtn.addEventListener('click', generatejokes)
    generatejokes();

