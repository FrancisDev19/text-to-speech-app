import React from 'react'
import { DiGithubAlt } from 'react-icons/di'

const Navbar = () => {
    return (
        <nav className="flex justify-end absolute w-screen p-5">
            <a href="https://github.com/FrancisDev19" target="_blank" rel="noreferrer">
                <DiGithubAlt size="3em" className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-out"/>
            </a>
        </nav>
    )
}

export default Navbar
