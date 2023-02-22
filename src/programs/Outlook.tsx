import styles from "./Outlook.module.css";
import mailto from "../../assets/toolbar/mailto.png";
import send from "../../assets/toolbar/send.png";
import Image from "next/image";
import cut from "../../assets/toolbar/cut.png";
import copy from "../../assets/toolbar/copy.png";
import paste from "../../assets/toolbar/paste.png";
import undo from "../../assets/toolbar/undo.png";
import check from "../../assets/toolbar/check.png";
import spelling from "../../assets/toolbar/spelling.png";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

const Outlook = () => {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const API_KEY = process.env.NEXT_PUBLIC_MAILGUN_API;
  const FROM_EMAIL = "feedback@pohwp.dev";
  const TO_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const axios = require("axios");
  const captchaRef = React.useRef(null);
  const sendEmail = async () => {
    if (from !== "" && subject !== "") {
      console.log(API_KEY);
      await axios({
        method: "post",
        url: `https://api.mailgun.net/v3/pohwp.dev/messages`,
        auth: {
          username: "api",
          password: API_KEY,
        },
        params: {
          from: FROM_EMAIL,
          to: TO_EMAIL,
          subject: "New Message From A Visitor!",
          text: "From: " + from + "\nMessage: " + message,
        },
      })
        .then(() => {
          console.log("Email sent successfully!");
        })
        .catch(() => {
          console.error("Error sending email:");
        });
    } else {
      console.log("Please fill in all fields!");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.icons_toolbar}>
        <div
          className={
            from !== "" && subject !== "" && message !== ""
              ? styles.icon
              : styles.icon_disabled
          }
        >
          <Image
            style={
              from !== "" && subject !== "" && message !== ""
                ? { margin: "0 4px" }
                : {
                    margin: "0 4px",
                    filter: "grayscale(100%) brightness(0.9)",
                  }
            }
            alt="send"
            width={40}
            height={30}
            src={send.src}
            onClick={sendEmail}
          />
          <p>Send</p>
        </div>
        <div className={styles.vertical_line} />
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="cut"
            width={25}
            height={30}
            src={cut.src}
          />
          <p>Cut</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="copy"
            width={28}
            height={30}
            src={copy.src}
          />
          <p>Copy</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="paste"
            width={28}
            height={30}
            src={paste.src}
          />
          <p>Paste</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="undo"
            width={28}
            height={30}
            src={undo.src}
          />
          <p>Undo</p>
        </div>
        <div className={styles.vertical_line} />
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="check"
            width={32}
            height={30}
            src={check.src}
          />
          <p>Check</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="spelling"
            width={32}
            height={30}
            src={spelling.src}
          />
          <p>Spelling</p>
        </div>
      </div>
      <div>
        <div className={styles.mailing}>
          <div className={styles.mailing_text}>
            <div className={styles.field_text}>
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={20}
                height={20}
                src={mailto.src}
              />
              <p>To:</p>
            </div>
            <div className={styles.field_text}>
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={20}
                height={20}
                src={mailto.src}
              />
              <p>From:</p>
            </div>
            <div className={styles.field_text}>
              <p>Subject:</p>
            </div>
          </div>
          <ReCAPTCHA
            sitekey="6Lf56aQkAAAAANwyzQiVcXM9TTgoEVDP5ge-_gwT"
            ref={captchaRef}
          />
          <div className={styles.mailing_fields}>
            <input
              className={styles.textfield}
              style={{ cursor: "default" }}
              disabled
              id="text21"
              type="text"
              value="Poh Wei Pin (pohwp99@gmail.com)"
            />
            <input
              className={styles.textfield}
              placeholder="Enter your email address"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              type="email"
            />
            <input
              className={styles.textfield}
              placeholder="What is this message/email regarding?"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={styles.richfield}>
        <textarea
          draggable={false}
          className={styles.richtextbox}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="text24"
          placeholder="Type your message here...(Maybe you want to hire me for a job or something?)"
        ></textarea>
      </div>
    </div>
  );
};

export default Outlook;