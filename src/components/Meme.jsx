import React from 'react'
import { useState } from 'react'
import "./Meme.css"
import memesData from "../memesData.js"
const Meme = () => {

    const [meme,setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMemeImage = () => {
        const memes = allMemeImages.data.memes
        const i = Math.floor(Math.random() * memes.length)
        const memeUrl = memes[i].url
        
        setMeme(prev => ({...prev,randomImage:memeUrl}))
    }


    return (
        <main>
            <div className='form'>
                <div className='container'>
                    <input type='text' placeholder='Top Text'></input>
                    <input type='text' placeholder='Bottom Text'></input>
                </div>
                <button onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className='meme-container'>
            <img className="meme" src={meme.randomImage} />
            </div>
        </main>
    )
}

export default Meme