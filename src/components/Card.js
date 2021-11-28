import React, { useState, useRef, useEffect } from 'react'

const synth = speechSynthesis;

const Card = () => {

    const textAreaRef = useRef();
    const selectRef = useRef();
    const [text, setText] = useState('');

    useEffect(() => {
        textAreaRef.current.focus();
    }, [])

    const textToSpeech = e => {
        e.preventDefault();
        if(text === ""){
            textAreaRef.current.focus()
        }else {
            let utternance = new SpeechSynthesisUtterance(text);
            for(let voice of synth.getVoices()){
                if(voice.name === selectRef.current.value ){
                    utternance.voice = voice;
                }
            }
            synth.speak(utternance);
        }
    }

    return (
        <div className="bg-white w-96 p-10">
            <h1 className="font-black text-2xl text-center uppercase mb-10">text to speech</h1>
            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <p className="text-gray-700"> Enter text</p>
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        ref={textAreaRef}
                        className="mt-1 block w-full h-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 select-all" 
                        value={text}
                    ></textarea>
                </label>
                <label className="block">
                    <p className="text-gray-700">Select Voice</p>
                    <select 
                        ref={selectRef}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                    >
                        {
                            synth.getVoices().map((voice) => (
                                <option 
                                    value={voice.name} 
                                    key={voice.name}
                                > 
                                    {voice.name} ({voice.lang}) 
                                </option>
                            ))
                        }
                    </select>
                </label>
                    <button 
                        onClick={textToSpeech}
                        className="bg-primary hover:bg-secondary text-white mt-1 block w-full rounded-md shadow-sm p-5 transition-all duration-300 ease-out"
                    >
                    Convert to Speech
                    </button>
            </div>
        </div>
    )
}

export default Card
