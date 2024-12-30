import React from 'react'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Pairs({ pairs, handleSubmit }) {

    return (
        !!pairs.length &&
            <div className="bg-green-700 px-7 h-full w-full pt-2 bg-[url('pickle-icon.png')] bg-repeat bg-[size:65px_65px]">
                <div className="bg-green-600 relative bg-opacity-90 mt-6 px-5 py-6 rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-black">
                    <button className="absolute top-2" onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faArrowsRotate} className="text-lg text-black rounded-xl p-1 bg-yellow-400"/>
                    </button>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black bg-yellow-400 rounded-tr-xl inline-block text-sm px-2">Round 1</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {pairs[0]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[1]}
                    </div>
                    <div className="flex flex-row justify-center border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {pairs[2]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[3]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 2</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {pairs[4]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[5]}
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {pairs[6]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[7]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 3</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {pairs[8]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[9]}
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {pairs[10]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[11]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 4</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {pairs[12]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[13]}
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {pairs[14]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[15]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 5</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {pairs[16]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[17]}
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {pairs[18]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[19]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 6</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {pairs[20]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[21]}
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {pairs[22]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[23]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 7</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {pairs[24]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[25]}
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px]">
                        {pairs[26]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[27]}
                    </div>
                </div>
            </div>
    )
}

export default Pairs
