import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"


export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Card 
                img="zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="Netherlands"
                title="Life Lessons with Katie Zaferes"
                price={136}
                isAvailiable = {true}
                hasPromoCade = {false}
                
            />
        </>
    )
}



// import React from "react"
// import Joke from "./Joke"
// import jokesData from "./jokesData"

// export default function App() {
//     const jokeElements = jokesData.map(joke => {
//         return <Joke setup={joke.setup} punchline={joke.punchline} />
//     })
//     return (
//         <div>
//             {jokeElements}
//         </div>
//     )
// }
