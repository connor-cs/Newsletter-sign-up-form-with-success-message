import { useState } from "react";
import "./App.css";
import Success from "./Success";

function App() {
  const [valid, setValid] = useState(true);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  //this is for submission
  function isValid(e) {
    e.preventDefault();
    checkValid();
    if (valid && email.length > 0) setSuccess(true);
  }

  //simply checks validity onblur events and for submission event
  const checkValid = () => {
    const pattern = /\S+@\S+\.\S+/;
    if (!pattern.test(email)) {
      setValid(false);
    } else setValid(true);
    console.log(valid);
  };

  //the main section could be abstracted out into a seperate component but whatever it's fine
  return (
    <>
      {success ? (
        <Success email={email} valid={valid} setSuccess={setSuccess} />
      ) : (
        <div className="body">
          <div className="main-container">
            <div className="left">
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving onthly updates on:</p>
              <ul>
                <li>
                  <img
                    src="/images/icon-list.svg"
                    className="check"
                    alt="check"
                  />
                  Product discovery and builidng what matters
                </li>
                <li>
                  <img
                    src="/images/icon-list.svg"
                    className="check"
                    alt="check"
                  />
                  Measuring to ensure updates are a success
                </li>
                <li>
                  <img
                    src="/images/icon-list.svg"
                    className="check"
                    alt="check"
                  />
                  And much more!
                </li>
              </ul>
              <div className="form">
                <form>
                  <div className="test">
                    <label htmlFor="email">Email address</label>
                    <span className={valid ? "valid" : "error-msg"}>
                      Valid email required
                    </span>
                  </div>

                  <input
                    type="email"
                    id="email"
                    placeholder="email@email.com"
                    className={valid ? null : "invalid"}
                    required
                    pattern="/\S+@\S+\.\S+/"
                    // onFocus={() => checkValid()}
                    onBlur={() => checkValid()}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" onClick={(e) => isValid(e)}>
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
            </div>
            <div className="right">
              <img src="/images/illustration-sign-up-desktop.svg" alt="img" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
