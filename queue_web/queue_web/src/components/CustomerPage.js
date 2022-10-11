import "./customer.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CounterPage } from "./CounterPage";
import { useNavigate } from "react-router-dom";

function CustomerPage() {
  let navigate = useNavigate();
  const [waitList, setWaitList] = useState([]);
  const [status, setStatus] = useState();
  const [ticket, setTicket] = useState([]);
  const [lastTicket, setLastTicket] = useState(-1);

  const takeNumber = () => {
    axios.get("http://localhost:5000/take").then((response) => {
      setWaitList(response.data.waitlist);
      setLastTicket(response.data.waitlist[response.data.waitlist.length - 1]);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/waitList").then((response) => {
      setWaitList(response.data.waitlist);
    });
    axios.get("http://localhost:5000/status").then((response) => {
      setStatus(response.data.status);
    });
    axios.get("http://localhost:5000/ticket").then((response) => {
      setTicket(response.data.ticket);
    });
  }, []);

  if (status != undefined) {
    for (let i = 0; i < status.length; i++) {
      var element = document.getElementById("box" + (i + 1));
      if (status[i] == true) {
        element.style.backgroundColor = "#00FF00";
      } else {
        element.style.backgroundColor = "#808080";
      }
    }
    console.log(ticket);
  }
  return (
    <div class="out-box">
      <button
        class="button-6"
        onClick={() => {
          navigate("/counter");
        }}
      >
        Switched to counter page
      </button>
      <div class="upper-box">
        <div>
          Currently Serving :{" "}
          {waitList.length < 1 ? "Not Serving" : waitList[0]}
        </div>
        <div>Last Ticket Number : {lastTicket}</div>
        <button class="button-6" onClick={takeNumber}>
          Take a number
        </button>
      </div>
      <div class="lower-box">
        <div class="counter-box">
          <div>Counter 1</div>
          <div>
            {ticket.length > 0 && ticket[0] >= 0
              ? "Serving : " + ticket[0]
              : "Have not take on a ticket"}
          </div>
          <div id="box1" class="box"></div>
        </div>
        <div class="counter-box">
          <div>Counter 2</div>
          <div>
            {ticket.length > 0 && ticket[1] >= 0
              ? "Serving : " + ticket[1]
              : "Have not take on a ticket"}
          </div>{" "}
          <div id="box2" class="box"></div>
        </div>
        <div class="counter-box">
          <div>Counter 3</div>
          <div>
            {ticket.length > 0 && ticket[2] >= 0
              ? "Serving : " + ticket[2]
              : "Have not take on a ticket"}
          </div>{" "}
          <div id="box3" class="box"></div>
        </div>
        <div class="counter-box">
          <div>Counter 4</div>
          <div>
            {ticket.length > 0 && ticket[3] >= 0
              ? "Serving : " + ticket[3]
              : "Have not take on a ticket"}
          </div>{" "}
          <div id="box4" class="box"></div>
        </div>
      </div>
    </div>
  );
}

export { CustomerPage };
