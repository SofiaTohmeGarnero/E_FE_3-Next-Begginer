import type { NextPage } from "next";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [user, setUser] = useState({ mail: "", password: "" });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user)
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      router.push("/faqs");
    } else alert("Please check your info");
  };

  return (
    <div>
      <h1>Login!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {"Mail "}
          <input
            type="text"
            name="mail"
            placeholder="felipe@dh.com"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {"Password "}
          <input
            type="password"
            name="password"
            placeholder="1234"
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default Login;
