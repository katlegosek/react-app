import { useState } from "react";
import axios from 'axios';

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
            var details = {
                'client_id': 'web-dashboard',
                'client_secret': 'SuperSecretPassword', //Dont usually expose secret but ran out of time
                'scope': 'openid profile role email offline_access adminApi mobileApi',
                'username': 'admin@codehesion.co.za',
                'password': 'P@ssword1',
                'grant_type': 'password'
            };
            
            var formBody = [];
            for (var property in details) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            
            const request = await fetch('https://edeaf-api-staging.azurewebsites.net/connect/token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: formBody
            });
            const token = await request.json();
            const accessToken = token.access_token;

        } catch (err) {
          console.log(err);
        }
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        {/* <input
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
        /> */}
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
