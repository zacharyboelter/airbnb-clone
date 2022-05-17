import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App(e) {
    console.log(data)
    const dataElement = data.map(e => {
        return <Card 
            img={e.coverImg}
            rating={e.stats.rating}
            reviewCount={e.stats.reviewCount}
            location={e.location}
            title={e.title}
            price={e.price}
        />
    })
            // <Hero />
    return (
        <div>
            <Navbar />
            <Hero />
            {dataElement}
        </div>
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
