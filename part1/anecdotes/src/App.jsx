import { useState } from 'react'
// part 1 completed
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const changeAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * (anecdotes.length));
    console.log(randomNumber);
    setSelected(randomNumber);
  };

  const voteAnecdotes = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  const getHighestVotedAnecdoteIndex = () => {
    const maxVotes = Math.max(...points);
    return points.indexOf(maxVotes);
  };

  const highestVotedIndex = getHighestVotedAnecdoteIndex();


  return (
    <div>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[selected]}</p>
    <p> has {points[selected]} voles </p>
    <button onClick={voteAnecdotes}>vote</button>
<button onClick={changeAnecdote}>next anecdote</button>

    <h1>Anecdote with most votes</h1>
    <p>{anecdotes[highestVotedIndex]}</p>
    <p>has {points[highestVotedIndex]} votes</p>

    </div>
  )
}

export default App