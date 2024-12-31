import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Pairs({ pairs, handleSubmit }) {

    return (
        !!pairs.length &&
            <div className="bg-green-700 px-7 h-full w-full pt-2 bg-[url('pickle-icon.png')] bg-repeat bg-[size:65px_65px]">
                <Link to='/' className="w-full flex flex-row ">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-sm align-bottom text-black rounded-tr-lg px-6 py-[4px] bg-yellow-400 border-solid "/>
                </Link>
                <div className="bg-green-600 relative bg-opacity-90 px-5 py-6 rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-black drop-shadow-[0_5px_3px_rgba(0,0,0,0.35)]">
                    <button className="absolute top-2" onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faArrowsRotate} className="text-lg text-black rounded-xl p-1 bg-yellow-400"/>
                    </button>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black bg-yellow-400 rounded-tr-xl inline-block text-sm px-2">Round 1</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {/* {pairs[0]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[1]} */}
                        {/* <p className="text-sm font-bold">{pair[0]} / {pair[1]}</p> */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[0].player1} / {pairs[0].player2} </p><p className="text-sm ">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]">  {pairs[1].player1} / {pairs[1].player2}</p>
                    </div>
                    <div className="flex flex-row justify-center border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {/* {pairs[2]} <p className="px-3 text-sm font-bold">vs.</p> {pairs[3]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[2].player1} / {pairs[2].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[3].player1} / {pairs[3].player2}</p>
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 2</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {/* {pairs[4]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[5]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[4].player1} / {pairs[4].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[5].player1} / {pairs[5].player2}</p>
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {/* {pairs[6]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[7]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[6].player1} / {pairs[6].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[7].player1} / {pairs[7].player2}</p>
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 3</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {/* {pairs[8]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[9]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[8].player1} / {pairs[8].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[9].player1} / {pairs[9].player2}</p>
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {/* {pairs[10]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[11]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[10].player1} / {pairs[10].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[11].player1} / {pairs[11].player2}</p>
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 4</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {/* {pairs[12]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[13]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[12].player1} / {pairs[12].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[13].player1} / {pairs[13].player2}</p>
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {/* {pairs[14]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[15]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[14].player1} / {pairs[14].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[15].player1} / {pairs[15].player2}</p>
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 5</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {/* {pairs[16]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[17]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[16].player1} / {pairs[16].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[17].player1} / {pairs[17].player2}</p>
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {/* {pairs[18]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[19]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[18].player1} / {pairs[18].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[19].player1} / {pairs[19].player2}</p>
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 6</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {/* {pairs[20]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[21]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[20].player1} / {pairs[20].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[21].player1} / {pairs[21].player2}</p>
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px] mb-2">
                        {/* {pairs[22]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[23]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[22].player1} / {pairs[22].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[23].player1} / {pairs[23].player2}</p>
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 7</h2>
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-tl-2xl py-[1px]">
                        {/* {pairs[24]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[25]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[24].player1} / {pairs[24].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[25].player1} / {pairs[25].player2}</p>
                    </div>
                    <div className="flex flex-row justify-center  border-black border-dashed bg-green-200 rounded-br-2xl py-[1px]">
                        {/* {pairs[26]} <p className="px-3 text-sm font-bold"></p><p>&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold"></p> {pairs[27]} */}
                        <p className="text-sm font-bold w-[45%] text-right">{pairs[26].player1} / {pairs[26].player2} </p><p className="text-sm">&nbsp;&nbsp;&nbsp;vs.&nbsp;&nbsp;&nbsp;</p><p className="text-sm font-bold w-[45%]"> {pairs[27].player1} / {pairs[27].player2}</p>
                    </div>
                </div>
            </div>
    )
}

export default Pairs
