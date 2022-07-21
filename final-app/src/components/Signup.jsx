import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("admin");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let token = await fetch("https://edeaf-api-staging.azurewebsites.net/connect/token");
            console.log(token);
        //   let res = await fetch("https://edeaf-api-staging.azurewebsites.net/", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       name: name,
        //       surname: surname,
        //       email: email,
        //       password: password,
        //       role: role
            // }),
        //   });
          let resJson = await res.json();
          if (res.status === 200) {
            setName("");
            setEmail("");
            setSurname("");
            setPassword("");
            setMessage("User created successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={surname}
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  )
}

export default Signup
