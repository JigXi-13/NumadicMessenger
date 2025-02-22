import logo from "./logo.svg";
import "./App.css";

import Homepage from "./pages/Homepage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chatspage from "./pages/Chatspage";

import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <Router>
      <ChatProvider>
        <ChakraProvider>
          <div className="App">
            <nav>
              <ul>
                <li>
                  <Link to="/">Homepage</Link>
                </li>
                <li>
                  <Link to="/chats">Chats</Link>
                </li>
              </ul>
            </nav>

            {/* A <Routes> is similar to switch in react-router, but it does not support exact path matching */}
            <Routes>
              <Route path="/chats" element={<Chatspage />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </div>
        </ChakraProvider>
      </ChatProvider>
    </Router>
  );
}

export default App;
