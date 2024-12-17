import React from 'react'

function Pairs({ pairs }) {

    return (
        !!pairs.length &&
            <>
                <h2 className="font-extrabold text-xl w-full text-center">Round 1</h2>
                <div className="flex flex-row justify-center border-2">
                    {pairs[0]} <p className="px-4">vs.</p> {pairs[1]}
                </div>
                <div className="flex flex-row justify-center border-b-2">
                    {pairs[2]} <p className="px-4">vs.</p> {pairs[3]}
                </div>
                <h2 className="font-extrabold text-xl w-full text-center mt-2">Round 2</h2>
                <div className="flex flex-row justify-center border-2">
                    {pairs[4]} <p className="px-4">vs.</p> {pairs[5]}
                </div>
                <div className="flex flex-row justify-center border-b-2">
                    {pairs[6]} <p className="px-4">vs.</p> {pairs[7]}
                </div>
                <h2 className="font-extrabold text-xl w-full text-center mt-2">Round 3</h2>
                <div className="flex flex-row justify-center border-2">
                    {pairs[8]} <p className="px-4">vs.</p> {pairs[9]}
                </div>
                <div className="flex flex-row justify-center border-b-2">
                    {pairs[10]} <p className="px-4">vs.</p> {pairs[11]}
                </div>
                <h2 className="font-extrabold text-xl w-full text-center mt-2">Round 4</h2>
                <div className="flex flex-row justify-center border-2">
                    {pairs[12]} <p className="px-4">vs.</p> {pairs[13]}
                </div>
                <div className="flex flex-row justify-center border-b-2">
                    {pairs[14]} <p className="px-4">vs.</p> {pairs[15]}
                </div>
                <h2 className="font-extrabold text-xl w-full text-center mt-2">Round 5</h2>
                <div className="flex flex-row justify-center border-2">
                    {pairs[16]} <p className="px-4">vs.</p> {pairs[17]}
                </div>
                <div className="flex flex-row justify-center border-b-2">
                    {pairs[18]} <p className="px-4">vs.</p> {pairs[19]}
                </div>
                <h2 className="font-extrabold text-xl w-full text-center mt-2">Round 6</h2>
                <div className="flex flex-row justify-center border-2">
                    {pairs[20]} <p className="px-4">vs.</p> {pairs[21]}
                </div>
                <div className="flex flex-row justify-center border-b-2">
                    {pairs[22]} <p className="px-4">vs.</p> {pairs[23]}
                </div>
                <h2 className="font-extrabold text-xl w-full text-center mt-2">Round 7</h2>
                <div className="flex flex-row justify-center border-2">
                    {pairs[24]} <p className="px-4">vs.</p> {pairs[25]}
                </div>
                <div className="flex flex-row justify-center border-b-2">
                    {pairs[26]} <p className="px-4">vs.</p> {pairs[27]}
                </div>
            </>
    )
}

export default Pairs
