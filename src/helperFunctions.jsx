function shuffleArray(array) {
  console.log('Original array:', array);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array; // Explicitly return the shuffled array
}

function pairPlayers(playersNames) {
  console.log('in here and playersNames is', playersNames)
    const pairings = Array.from({ length: 8 }, () => [])
    const used = Array.from({ length: 8 }, () => [])
    const pairs = Array.from({ length: 8 }, () => [])

    for(let i=0; i < 8; i++) {
      for(let j=0; j < 8; j++) {
        if(i !== j)
        for(let k=0; k < 8; k++) {
          if(!used[k].includes(i) && !used[k].includes(j) && !pairs.includes(`${i},${j}`)) {
            pairings[k].push([i, j])
            pairs.push(`${i},${j}`)
            pairs.push(`${j},${i}`)
            used[k].push(i)
            used[k].push(j)
            break
          }
        }
      }
    }
  
    const namedPairs = pairings.map((round) => {
      return shuffleArray(round.map((pair => [playersNames[pair[0]], playersNames[pair[1]]])))
    })
  
    return(namedPairs)
  }

  export { pairPlayers }