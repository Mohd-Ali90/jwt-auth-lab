import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/SigninPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import MyEntries from "./pages/MyEntries";
import Entries from "./pages/Entries";
import Create from "./pages/Create";
import EditEntry from "./pages/EditEntry";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/my-entries' element={<ProtectedRoute><MyEntries /></ProtectedRoute>} />
        <Route path='/entries' element={<Entries/>}/>
        <Route path='/entries/create' element={<ProtectedRoute><Create /></ProtectedRoute>} />
        <Route path='/entries/:entryId/edit'element={<ProtectedRoute><EditEntry /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
