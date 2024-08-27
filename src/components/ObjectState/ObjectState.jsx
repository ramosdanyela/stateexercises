import "/Users/danyelaramos/Documents/development/react/state/src/components/ObjectState/ObjectState.css";
import { useState } from "react";

function ObjectState() {
  const [user, setUser] = useState({
    name: "Wiley Taleb",
    age: 26,
    isActive: true,
  });

  const [bgColor, setBgColor] = useState("white");

  function handleChangeNameandAge() {
    setUser({
      ...user,
      name: "Maria",
      age: 25,
    });
  }

  function toggleUserActive() {
    setUser({
      ...user,
      isActive: !user.isActive,
    });
  }

  function handleChangeBackground() {
    setBgColor(bgColor === "white" ? "green" : "white");
  }

  return (
    <div>
      <h1 className="title">3. Object State</h1>
      <div
        className="cadastroContainer"
        style={{
          color: user.isActive ? "black" : "red",
          backgroundColor: bgColor,
        }}
      >
        <h1>
          Meu nome é {user.name} e tenho {user.age} anos.
        </h1>

        <button onClick={handleChangeNameandAge}> Change Name and Age </button>

        <button onClick={toggleUserActive}>
          {" "}
          {user.isActive ? "Deactivate" : "Activate"} User
        </button>

        <button onClick={handleChangeBackground}>
          {" "}
          {/* o que significa isso? */}
          {bgColor === "white"
            ? "Change Background Color"
            : "Back to original color"}
        </button>
      </div>
    </div>
  );
}

export default ObjectState;
