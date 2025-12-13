import React from 'react'

export const ButtonOne = ({ fun, name }: { fun: any, name: string }) => {
    return (
        <button onClick={fun} className="button-1" role="button">{name}</button>
    )
}



export const ButtonTwo = ({ fun, hoverOutName, hoverInName }: { fun: any, hoverOutName: string, hoverInName: string }) => {
    return (
        <button
            onClick={fun}
            className="border-2 border-solid  overflow-hidden relative w-30 p-2 h-10 bg-black text-white border-none rounded-md text-l font-bold cursor-pointer relative z-10 group"
        >
            {hoverOutName}
            <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
            ></span>
            <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
            ></span>
            <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
            ></span>
            <span
                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-6 z-10"
            >{hoverInName}</span>

        </button>

    )
}

