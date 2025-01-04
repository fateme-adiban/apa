import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

// My Components
import BlankPage from "./components/BlankPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Chat from "./components/Chat"
import MedialLibraryViewAudio from "./components/MedialLibraryViewAudio"
import Servey from "./components/Survey"
import ServeyList from "./components/SurveyList"
import TodoDetails from "./components/TodoDetails"
import TodoList from "./components/TodoList"
import MainPage from "./components/MainPage"
import MenuDefault from "./components/MenuDefault"

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BlankPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/medial-library-view-audio" element={<MedialLibraryViewAudio />} />
        <Route path="/servey" element={<Servey />} />
        <Route path="/servey-list" element={<ServeyList />} />
        <Route path="/todo-details" element={<TodoDetails />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
