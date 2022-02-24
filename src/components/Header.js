import logo from "../assets/Logo (1).png"

function Header () {
    return (
        <nav>
            <img src={logo} alt="meme logo"></img>
            <h1>React Course - Project 3</h1>
        </nav>
    )
}

export default Header