import { useState } from "react";

const Home = () => {

  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const toggleLbl = () => {
    value === "toggle" && setVisible(prev => !prev);
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <h1 className="centered margined">Simple page for testing</h1>
      <div className="margined small_container">
        <input type={"text"} id="searchinput" onChange={onChange} className={"large"} />
        <button id={"do_bttn"} onClick={toggleLbl} className={"large"}>Do smth</button>
      </div>
      <div className="margined">
        { visible && <h2 id="result" className="centered">TOGGLED</h2> }
      </div>
    </div>
  );
}
export default Home;
