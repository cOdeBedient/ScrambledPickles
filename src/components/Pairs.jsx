import React from 'react'

function Pairs({ pairs }) {

    return (
        !!pairs.length &&
            <div className="bg-green-700 px-8 h-full w-full pt-2">
                <div className="bg-green-600 mt-6 px-6 py-6 rounded-tr-3xl rounded-bl-3xl">
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black bg-yellow-400 rounded-tr-xl inline-block text-sm px-2">Round 1</h2>
                    </div>
                    <div className="flex flex-row justify-center border-y-2 border-black border-dashed bg-green-200 rounded-tl-3xl">
                        {pairs[0]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[1]}
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-br-3xl mb-2">
                        {pairs[2]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[3]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 2</h2>
                    </div>
                    <div className="flex flex-row justify-center border-y-2 border-black border-dashed bg-green-200 rounded-tl-3xl">
                        {pairs[4]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[5]}
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-br-3xl mb-2">
                        {pairs[6]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[7]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 3</h2>
                    </div>
                    <div className="flex flex-row justify-center border-y-2 border-black border-dashed bg-green-200 rounded-tl-3xl">
                        {pairs[8]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[9]}
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-br-3xl mb-2">
                        {pairs[10]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[11]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 4</h2>
                    </div>
                    <div className="flex flex-row justify-center border-y-2 border-black border-dashed bg-green-200 rounded-tl-3xl">
                        {pairs[12]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[13]}
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-br-3xl mb-2">
                        {pairs[14]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[15]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 5</h2>
                    </div>
                    <div className="flex flex-row justify-center border-y-2 border-black border-dashed bg-green-200 rounded-tl-3xl">
                        {pairs[16]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[17]}
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-br-3xl mb-2">
                        {pairs[18]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[19]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 6</h2>
                    </div>
                    <div className="flex flex-row justify-center border-y-2 border-black border-dashed bg-green-200 rounded-tl-3xl">
                        {pairs[20]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[21]}
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-br-3xl mb-2">
                        {pairs[22]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[23]}
                    </div>
                    <div className="flex flex-row justify-end">
                        <h2 className="font-bold text-black  text-center mt-2 rounded-tr-xl inline-block text-sm px-2 bg-yellow-400">Round 7</h2>
                    </div>
                    <div className="flex flex-row justify-center border-y-2 border-black border-dashed bg-green-200 rounded-tl-3xl">
                        {pairs[24]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[25]}
                    </div>
                    <div className="flex flex-row justify-center border-b-2 border-black border-dashed bg-green-200 rounded-br-3xl">
                        {pairs[26]} <p className="px-4 text-sm font-bold">vs.</p> {pairs[27]}
                    </div>
                </div>
            </div>
    )
}

export default Pairs
