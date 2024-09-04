import { Link } from "react-router-dom"

export const Nav = () => {
    return(
        <nav className="nav-gradient flex items-center justify-between px-6 py-4">
            <div>
                <p className="font-bold tracking-widest text-2xl text-primLight">DevChat</p>
            </div>
            <div>
                <ul>
                    <li className="text-white"><Link to="/signin" className="border border-primAccent hover:bg-primAccent px-4 py-2 rounded-sm tracking-wide">Sign in</Link></li>
                </ul>
            </div>
        </nav>
    )
}