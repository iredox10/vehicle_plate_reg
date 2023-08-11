import { Link } from "react-router-dom"

const Header = () => {  
    return(
        <div className="bg-green-900 text-black flex justify-between text-white md:p-6 p-2">
            <h1>vehicle reg</h1>
            <div className="flex gap-4 md:gap-6 md:text-2xl capitalize">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>about</Link>
                <Link to={'/register'}>register</Link>
            </div>
        </div>
    )

}

export default Header 