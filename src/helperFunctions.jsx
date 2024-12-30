function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pair8Players(playersNames) {
  const pairings = Array.from({ length: 8 }, () => [])
  const used = Array.from({ length: 8 }, () => [])
  const pairs = Array.from({ length: 8 }, () => [])

  // i is the index of the first player
  for(let i=0; i < 8; i++) {
    //j is the index of the second player
    for(let j=0; j < 8; j++) {
      if(i !== j) {
        //k is the round number
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
  }

  const shuffledPlayers = shuffleArray(playersNames)
  const namedPairs = pairings.map((round) => {
    return shuffleArray(round.map((pair => [shuffledPlayers[pair[0]], shuffledPlayers[pair[1]]])))
  })

  return(namedPairs)
}

function pair9Players(playersNames) {
  const pairings = Array.from({ length: 10 }, () => [])
  const used = Array.from({ length: 10 }, () => [])
  const pairs = Array.from({ length: 10 }, () => [])
  const hasSat = []

  // i is the index of the first player
  for(let i=9; i >= 0; i--) {
    //j is the index of the second player
    for(let j=0; j < 10; j++) {
      if(i !== j) {
        //k is the round number
        for(let k=0; k < 10; k++) {
          // if(!used[k].includes(i) && !used[k].includes(j) && !pairs.includes(`${i},${j}`)) {
          if(k === 2) console.log('used[k]', used[k])
          if(!used[k].includes(i) && !used[k].includes(j) && !pairs.includes(`${i},${j}`)) {
            if(k === 2) console.log('i', i)
            if(k === 2) console.log('j', j)
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
  }

  // const shuffledPlayers = shuffleArray(playersNames)
  const shuffledPlayers = playersNames
  playersNames.push('Sitting')
  const namedPairs = pairings.map((round) => {
    // return shuffleArray(round.map((pair => [shuffledPlayers[pair[0]], shuffledPlayers[pair[1]]])))
    return round.map((pair => [shuffledPlayers[pair[0]], shuffledPlayers[pair[1]]]))
  })

  return(namedPairs)
}

// function pair9Players(names) {
//   // Ensure exactly 9 names are provided
//   if (names.length !== 9) {
//     throw new Error("The input must contain exactly 9 names.");
//   }

//   // Define the "sitting" placeholder name
//   const sitting = "sitting";
//   const allNames = [...names, sitting];  // Include "sitting" in the pool of names

//   // Create all unique pairings of 2 names
//   const usedPairs = new Set();
//   const allPairings = [];

//   // Generate all possible unique pairings
//   for (let i = 0; i < allNames.length; i++) {
//     for (let j = i + 1; j < allNames.length; j++) {
//       const pair = [allNames[i], allNames[j]];
//       const pairStr = pair.sort().join(",");  // Sort to avoid reversed pairs being treated as different
//       if (!usedPairs.has(pairStr) && pair[0] !== pair[1]) {
//         usedPairs.add(pairStr);
//         allPairings.push(pair);
//       }
//     }
//   }

//   // Shuffle the pairings array to ensure randomness
//   allPairings.sort(() => Math.random() - 0.5);

//   // Frequency map to track how many times each pair has been used
//   const pairUsageCount = new Map();

//   // Function to track pair usage and find the least-used pairs
//   function findLeastUsedPair() {
//     let leastUsedPair = null;
//     let minUsage = Infinity;

//     // Find the pair with the minimum usage count
//     for (let pair of allPairings) {
//       const pairStr = pair.sort().join(",");
//       const usage = pairUsageCount.get(pairStr) || 0;
//       if (usage < minUsage) {
//         minUsage = usage;
//         leastUsedPair = pair;
//       }
//     }

//     return leastUsedPair;
//   }

//   // Function to create groups of 5 pairs, ensuring minimal pair reuse
//   const result = [];
//   let remainingPairs = [...allPairings];  // Start with all possible pairings

//   // Helper function to ensure no pair repeats within a group
//   function canAddToGroup(pair, group) {
//     for (const existingPair of group) {
//       if (existingPair[0] === pair[0] || existingPair[1] === pair[1] ||
//           existingPair[0] === pair[1] || existingPair[1] === pair[0]) {
//         return false;  // Don't add if any name is repeated
//       }
//     }
//     return true;
//   }

//   // Create the groups
//   while (remainingPairs.length > 0) {
//     const tempGroup = [];
//     const usedInGroup = new Set();

//     // Try to build a group of 5 unique pairs
//     while (tempGroup.length < 5 && remainingPairs.length > 0) {
//       let pair;

//       // Try to pick the least used pair
//       pair = findLeastUsedPair();
//       if (canAddToGroup(pair, tempGroup)) {
//         // Add the pair to the group
//         tempGroup.push(pair);
//         usedInGroup.add(pair.sort().join(","));
//         // Update the usage count for this pair
//         pairUsageCount.set(pair.sort().join(","), (pairUsageCount.get(pair.sort().join(",")) || 0) + 1);
//         // Remove this pair from the remaining list
//         remainingPairs = remainingPairs.filter(p => p.sort().join(",") !== pair.sort().join(","));
//       }
//     }

//     // Add the group to the result if it's full (5 pairs)
//     if (tempGroup.length === 5) {
//       result.push(tempGroup);
//     }
//   }

//   return result;
// }

  export { pair8Players, pair9Players }