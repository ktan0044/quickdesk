import "./counter.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CounterPage() {
  let navigate = useNavigate();
  const handleStatus = (res) => {
    axios.post("https://react-queue-server.herokuapp.com/status", {
      number: res,
    });
  };

  const handleTicket = (res) => {
    axios
      .post("https://react-queue-server.herokuapp.com/ticket", { number: res })
      .then((res) => {
        console.log(res.data != undefined);
      });
  };

  const handleFinish = (res) => {
    axios.post("https://react-queue-server.herokuapp.com/finish", {
      number: res,
    });
  };

  return (
    <div class="column-outer">
      <button
        class="button-6"
        onClick={() => {
          navigate("/");
        }}
      >
        Switched to customer view
      </button>
      <div class="outer-box">
        <div class="inner-box">
          <div>Counter 1</div>
          <button class="button-6" onClick={() => handleStatus(0)}>
            Go Offline
          </button>
          <button class="button-6" onClick={() => handleFinish(0)}>
            Comp Curr
          </button>
          <button class="button-6" onClick={() => handleTicket(0)}>
            Call Next
          </button>
        </div>
        <div class="inner-box">
          <div>Counter 2</div>
          <button class="button-6" onClick={() => handleStatus(1)}>
            Go Offline
          </button>
          <button class="button-6" onClick={() => handleFinish(1)}>
            Comp Curr
          </button>
          <button class="button-6" onClick={() => handleTicket(1)}>
            Call Next
          </button>
        </div>
        <div class="inner-box">
          <div>Counter 3</div>
          <button class="button-6" onClick={() => handleStatus(2)}>
            Go Offline
          </button>
          <button class="button-6" onClick={() => handleFinish(2)}>
            Comp Curr
          </button>
          <button class="button-6" onClick={() => handleTicket(2)}>
            Call Next
          </button>
        </div>
        <div class="inner-box">
          <div>Counter 4</div>
          <button class="button-6" onClick={() => handleStatus(3)}>
            Go Offline
          </button>
          <button class="button-6" onClick={() => handleFinish(3)}>
            Comp Curr
          </button>
          <button class="button-6" onClick={() => handleTicket(3)}>
            Call Next
          </button>
        </div>
      </div>
    </div>
  );
}

export { CounterPage };
