import React, { useState } from "react";

// 1. TextUpdater Component
const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4 text-center">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-lg font-semibold">{text}</p>
    </div>
  );
};

// 2. Form with Input and Submit
const SimpleForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", input);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 text-center">
      <input
        type="text"
        className="border p-2 rounded mr-2"
        placeholder="Enter text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

// 3. UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

// 4. Styled Button Component
const StyledButton = () => {
  const handleClick = () => console.log("Button clicked!");

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Click Me
    </button>
  );
};

// 5. LoginForm Component
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full rounded mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full rounded mb-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Login
      </button>
    </form>
  );
};

// App Component
const App = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-center text-2xl font-bold">React Assignment</h1>
      <TextUpdater />
      <SimpleForm />
      <UserCard name="Yogendra Singh Rathod" email="yogendrasinghrathod2022@gmail.com" />
      <StyledButton />
      <LoginForm  className='align-center'/>
    </div>
  );
};

export default App;
