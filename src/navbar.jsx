//import './styles/index.css';

function Navbar() {
    return(
    <div className="navbar">
        <h1>Seker</h1>
        <ul>            {/* links fo functionality! */}
            <li>Images</li>
            <li>Videos</li>
            <li>Maps</li>
            <li>News</li>
            <li>Product</li>
        </ul>
        <div>
            <h2>Sign in</h2>
            <i className="fa-solid fa-sort-down"></i>
        </div>
    </div>
    )
    }
    
    export default Navbar;