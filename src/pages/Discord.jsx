import React, { useState } from "react";

const { Webhook } = require("discord-webhook-node");

var botName = "React Open-Source";

var botImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";

const Discord = () => {
  const [getText, setText] = useState({
    webhookUrl: "",
    message: "",
  });

  const [buttonState, setButtonState] = useState(1);

  const OnChangeValue = (e) => {
    const { value, name } = e.target;
    setText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const sendMessage = () => {
    const url = getText["webhookUrl"];
    const message = getText["message"];
    const hook = new Webhook(url);
    hook.setUsername(botName);
    hook.setAvatar(botImage);
    hook.send(message);
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    sendMessage();
    alert("Message Sent Successfully 😄");
  };

  const checkButtonState = () => {
    if (buttonState === 0) {
      setButtonState(1);
    } else {
      setButtonState(0);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center text-capitalize text-info p-3">
          Send Custom Discord Webhook Messsages 🌤️
        </h2>

        <div className="p-3">
          <center>
            <button
              onClick={checkButtonState}
              className="btn btn-outline-warning"
            >
              {buttonState ? (
                <h6>Customized Message 🧭</h6>
              ) : (
                <h6>Simple Message 🛩️</h6>
              )}
            </button>
          </center>
        </div>
        {buttonState ? (
          <div className="container">
            <form onSubmit={onSubmitClick}>
              <div class="form-group">
                <input
                  type="text"
                  onChange={OnChangeValue}
                  class="form-control"
                  name="webhookUrl"
                  placeholder="Discord Webhook URL"
                />
                <small id="emailHelp" class="form-text text-muted">
                  ✋ We'll never share your discord webhook url with anyone
                  else.
                </small>
              </div>
              <textarea
                class="form-control"
                placeholder="Custom Message"
                onChange={OnChangeValue}
                name="message"
                rows="3"
              ></textarea>
              <center>
                <div className="pt-4">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </center>
            </form>

            {/* <h3>{JSON.stringify(getText)}</h3> */}
          </div>
        ) : (
          <h2>Still Working On it</h2>
        )}
      </div>
    </>
  );
};

export default Discord;
