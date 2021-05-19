import React, { useState } from "react";
import { CirclePicker } from "react-color";

const { Webhook, MessageBuilder } = require("discord-webhook-node");

var botName = "React Open-Source";

var botImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";

const DiscordCustom = () => {
  const [color, setColor] = useState("#fff");

  const [getText, setText] = useState({
    webhookUrl: "",
    message: "",
    eImage: "",
  });

  const hook = new Webhook(getText["webhookUrl"]);

  const OnChangeValue = (e) => {
    const { value, name } = e.target;
    setText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const setCustomColor = (color) => {
    setColor(color.hex);
    console.log(color.hex);
  };

  const sendCustomMessage = () => {
    const embed = new MessageBuilder()
      .setColor(color)
      .setImage(getText["eImage"])
      .setDescription(getText["message"])
      .setTimestamp();
    hook.setUsername(botName);
    hook.setAvatar(botImage);
    hook.send(embed);
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    sendCustomMessage();
    alert("Custom Message Sent Successfully 😄");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmitClick}>
          <div className="form-group">
            <input
              type="text"
              onChange={OnChangeValue}
              class="form-control"
              name="webhookUrl"
              required
              placeholder="Discord Webhook URL"
            />
            <small id="emailHelp" className="form-text text-muted">
              ⛔ We'll never share your discord webhook url with anyone else.
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="eImage"
              required
              onChange={OnChangeValue}
              placeholder="Embeded Image Link"
            />
          </div>
          <textarea
            class="form-control"
            placeholder="Custom Message"
            onChange={OnChangeValue}
            name="message"
            rows="3"
            required
          ></textarea>
          <center>
            <div className="pt-3">
              <CirclePicker color={color} onChangeComplete={setCustomColor} />
            </div>
          </center>
          <center>
            <div className="pt-4">
              <button type="submit" className="btn btn-outline-success">
                Send Message 🙈
              </button>
            </div>
          </center>
        </form>
        {/* {JSON.stringify(getText)} */}
      </div>
    </>
  );
};

export default DiscordCustom;
