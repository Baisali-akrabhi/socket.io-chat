import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
const App = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Join />} />
    <Route path="/chat" component={Chat} />
    </Routes>
  </BrowserRouter>
)

export default App