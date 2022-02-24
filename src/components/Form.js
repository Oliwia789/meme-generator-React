import React from "react"

function From() {

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            image: "https://i.imgflip.com/wxica.jpg"
        }
    )

    const [allMemes, setAllMemes] = React.useState([])


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res =>res.json())
            .then(data => setAllMemes(data.data.memes.map(element => element.url)))
    }, [])


    function getMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber]
        setMeme(prevMeme => ({
            ...prevMeme,
            image: url
        }))
    }


    return (
        <section>
            <div className="form">
                <div className="form-inputs">
                    <input type="text" name="topText" value={meme.topText} onChange={handleChange} placeholder="" className="span first-span"/>
                    <input type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} placeholder="" className="span second-span"/>
                </div>
                <button className="submit" onClick={getMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image} alt="meme"/>
                <h2>{meme.topText}</h2>
                <h2 className="bottom">{meme.bottomText}</h2>
            </div>
        </section>
        
    )
}

export default From