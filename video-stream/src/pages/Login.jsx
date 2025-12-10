import { useRef, useState } from "react";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError("Failed to log in: " + err.message);
    }
    setLoading(false);
  }

  return (
    <AuthForm title="Log in" onSubmit={handleSubmit}>
      {error && <div className="text-red-600">{error}</div>}
      <input ref={emailRef} type="email" placeholder="Email" required className="w-full p-2 border rounded" />
      <input ref={passwordRef} type="password" placeholder="Password" required className="w-full p-2 border rounded" />
      <button disabled={loading} type="submit" className="w-full py-2 bg-blue-600 text-white rounded">
        Log in
      </button>
      <div className="text-sm text-center">
        Need an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
      </div>
    </AuthForm>
  );
}
