function App() {
  
  // {
  //   id: 0,
  //   quote : "",
  //   quoteAuthor: ""
  // },
  const quotes = [
    {
      id: 1,
      quote : "I find that the harder I work, the more luck I seem to have.",
      quoteAuthor: "Thomas Jefferson"
    },
    {
      id: 2,
      quote : "The way to get started is to quit talking and begin doing.",
      quoteAuthor: "Walt Disney"
    },
    {
      id: 3,
      quote : "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
      quoteAuthor: "Dr. Seuss"
    }
  ]

  function randomNum() {
    const randInt = Math.floor(Math.random() * quotes.length)
    return quotes[randInt]
  }

   let rq = randomNum()
  // const container = document.querySelector('.qContainer')

  return (
    <div className="App">
      <div className="qContainer">
        <div className="quote">{ `"${rq.quote}"` }</div>
        <div className="quoteAuthor">{ `- ${rq.quoteAuthor}` }</div>
      </div>
    </div>
  );
}

export default App;
