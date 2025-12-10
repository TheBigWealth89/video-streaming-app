
export default function AuthForm({ title, children, onSubmit }) {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
      </form>
    </div>
  );
}
