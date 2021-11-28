import React from 'react'
import {AiOutlineLoading} from 'react-icons/ai'

const Loading = () => {
    return (
        <div className="absolute bg-gray-600 w-full h-screen flex justify-center items-center">
            <p className="animate-spin">
            <AiOutlineLoading size="10em" className="text-white"/> Loading...
            </p>
        </div>
    )
}

export default Loading
