import { useState } from "react";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleCreateUser = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/api/users/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (data.error) {
        return alert(data.error);
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-20">
      {isLoading && <p>loading...</p>}
      <h1 className="text-4xl text-center">Create User</h1>
      <div className="space-y-5 mt-5 max-w-xl mx-auto">
        <input
          placeholder="John Doe"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          className="border w-full px-2 py-3 rounded-lg"
        />
        <input
          placeholder="example@email.com"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          className="border w-full px-2 py-3 rounded-lg"
        />
        <input
          type="number"
          placeholder="+1 123 456 7890"
          value={inputs.phone_number}
          onChange={(e) =>
            setInputs({ ...inputs, phone_number: e.target.value })
          }
          className="border w-full px-2 py-3 rounded-lg"
        />
        <button
          onClick={handleCreateUser}
          className="w-full py-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 rounded-lg text-white hover:opacity-90 transition-all"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
