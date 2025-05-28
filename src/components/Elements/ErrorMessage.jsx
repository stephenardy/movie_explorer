function ErrorMessage({ error }) {
  return (
    <div className="w-full text-center py-4 bg-red-100 text-red-700 rounded-md my-4 shadow">
      <p className="font-medium">⚠️ {error}</p>
    </div>
  );
}

export default ErrorMessage;
