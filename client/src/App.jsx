import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import TaskPage from './pages/TaskPage.jsx'
import TaskForm from './pages/TaskForm.jsx'
import NotFound from './pages/NotFound.jsx'
function App() {


  return (
      <Routes>

        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm />} />
        
        <Route path="*" element={<NotFound />} />
        
        </Routes>
  )
}

export default App
