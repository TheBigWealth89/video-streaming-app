
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Welcome, {currentUser?.displayName || currentUser?.email}</h1>
        <p className="mb-4">This is the protected home screen. You’re authenticated.</p>
        <button onClick={handleLogout} className="py-2 px-4 bg-red-500 text-white rounded">Log out</button>
      </div>
    </div>
  );
}
