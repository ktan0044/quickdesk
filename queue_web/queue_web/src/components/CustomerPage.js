import "./customer.css";
import { useState } from "react";
import axios from "axios";

function CustomerPage() {
  const [serve, setServe] = useState("No one");

  axios.get("http://localhost:5000/api").then((response) => {
    console.log(response);
  });

  axios.post("http://localhost:5000/api", { user: "tan" }).then((res) => {
    console.log(res);
  });
  return (
    <div class="out-box">
      <div class="upper-box">
        <div>Currently Serving : {serve}</div>
        <div>Last Number</div>
        <button>Take a number</button>
      </div>
      <div class="lower-box">
        <div class="counter-box">
          <div>Counter 1</div>
          <div>Serving Number</div>
          <div class="box"></div>
        </div>
        <div class="counter-box">
          <div>Counter 2</div>
          <div>Serving Number</div>
          <div class="box"></div>
        </div>
        <div class="counter-box">
          <div>Counter 3</div>
          <div>Serving Number</div>
          <div class="box"></div>
        </div>
        <div class="counter-box">
          <div>Counter 4</div>
          <div>Serving Number</div>
          <div class="box"></div>
        </div>
      </div>
    </div>
  );
}

export { CustomerPage };
