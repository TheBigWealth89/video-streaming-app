import  { useRef, useState } from "react";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <AuthForm title="Create an account" onSubmit={handleSubmit}>
      {error && <div className="text-red-600">{error}</div>}
      <input ref={nameRef} type="text" placeholder="Full name" required className="w-full p-2 border rounded" />
      <input ref={emailRef} type="email" placeholder="Email" required className="w-full p-2 border rounded" />
      <input ref={passwordRef} type="password" placeholder="Password" required className="w-full p-2 border rounded" />
      <button disabled={loading} type="submit" className="w-full py-2 bg-blue-600 text-white rounded">
        Sign up
      </button>
      <div className="text-sm text-center">
        Already have an account? <Link to="/login" className="text-blue-600">Log in</Link>
      </div>
    </AuthForm>
  );
}
