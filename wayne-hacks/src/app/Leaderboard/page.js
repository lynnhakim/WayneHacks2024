const data = [
	{ name: "Shawi", age: 20, score: "0" },
	{ name: "Merwin", age: 19, score: "1" },
	{ name: "Lynn", age: 19, score: "-500" },
    { name: "Hayley", age: 20, score: "0" },
]


function App() {
    return (
      <div className="App text-white text-6xl" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <table style={{ borderCollapse: 'collapse', border: '2px solid white', width: '95%', height: '70%' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', border: '1px solid white', verticalAlign: 'center', textAlign: 'center' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid white', verticalAlign: 'center', textAlign: 'center' }}>Age</th>
              <th style={{ padding: '10px', border: '1px solid white', verticalAlign: 'center', textAlign: 'center' }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td style={{ padding: '10px', border: '1px solid white', verticalAlign: 'center', textAlign: 'center' }}>{val.name}</td>
                  <td style={{ padding: '10px', border: '1px solid white', verticalAlign: 'center', textAlign: 'center' }}>{val.age}</td>
                  <td style={{ padding: '10px', border: '1px solid white', verticalAlign: 'center', textAlign: 'center' }}>{val.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default App;
  