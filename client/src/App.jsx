import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login'

const App = () => {
  const [user, setUser] = useState(null);


  if(!user) return <Login onLogin={setUser}/>

  return (
    <div>
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/investors/:id" element={<Investors deleteTransaction={deleteTransaction} />}/>
      <Route path="/transactions" element={<TransactionList editTransaction={editTransaction} deleteTransaction={deleteTransaction} transactions={transactions} />}/>
      <Route path="/transactions/new" element={<TransactionForm addTransaction={addTransaction} />}/>
    </Routes>
  </Router>
  </div>
  )
}

export default App