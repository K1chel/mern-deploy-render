import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto min-h-screen px-4">
      <nav className="w-full h-20 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold">MERN Deploy TEST</h1>
        </Link>
        <Link to="/create">
          <button className="py-2 px-3 border rounded-xl shadow-md bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 text-slate-700 hover:opacity-80 transition-all duration-300">
            Create User
          </button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;
