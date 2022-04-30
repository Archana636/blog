import React, { useState, useRef, useEffect } from "react";
import styles from "../style/Page/invitation.module.css";

function Invitation() {
  const [value, setValue] = useState({ "phone-num": "" });
  const [error, setError] = useState({ "phone-num": false });
  const companyRef = useRef(null);
  const nameRef = useRef(null);
  const phoneNumRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    let phoneRegex = /^[0-9]{10}$/;
    const data = {
      company: companyRef.current.value,
      name: nameRef.current.value,
      phoneNum: phoneNumRef.current.value,
    };
    if (data.phoneNum.match(phoneRegex)) {
      //   window.alert("Right!");
      setError((prevValue) => ({ ...prevValue, "phone-num": false }));
    } else {
      //   window.alert("Wrong!");
      setError((prevValue) => ({ ...prevValue, "phone-num": true }));
    }
    console.log(data);
  }
  function handleChange(e) {
    const { id, value, checked } = e.target;
    console.log(id, e.target.checked, checked);

    if (id === "phone-num") {
      let phoneRegex = /^[0-9]{10}$/;
      if (value.match(phoneRegex)) {
        //   window.alert("Right!");
        setError((prevValue) => ({ ...prevValue, "phone-num": false }));
      } else {
        //   window.alert("Wrong!");
        setError((prevValue) => ({ ...prevValue, "phone-num": true }));
      }
    }
    if (id === "stay" || id === "transport") {
      setValue((prevValue) => ({ ...prevValue, [id]: checked ? "Yes" : "No" }));
    } else if (id === "acc-yes" || id === "acc-no") {
      setValue((prevValue) => ({ ...prevValue, accomdation: value }));
    } else {
      setValue((prevValue) => ({ ...prevValue, [id]: value }));
    }
  }
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className={`${styles.container}`}>
      <form onChange={handleChange}>
        <div className={`${styles.inputWrapper} `}>
          <label>Company</label>
          <input type="text" id="company" ref={companyRef} />
        </div>
        <div className={`${styles.inputWrapper} `}>
          <label>Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={`${styles.inputWrapper} `}>
          <label>Phone No.</label>
          <input type="text" id="phone-num" ref={phoneNumRef} maxLength="10" />
          {Boolean(error["phone-num"]) && (
            <label className={`${styles.error}`}>Wrong Phone number</label>
          )}
        </div>
        {/* <section>
          <div className={`${styles.inputWrapper} `}>
            <input type="radio" name="attend" value="yes" id="attend-yes" />
            <label>Yes</label>
          </div>
          <div className={`${styles.inputWrapper} `}>
            <input type="radio" name="attend" value="maybe" id="attend-maybe" />
            <label>Maybe</label>
          </div>
          <div className={`${styles.inputWrapper} `}>
            <input type="radio" name="attend" value="no" id="attend-no" />
            <label>No</label>
          </div>
        </section> */}
        <section>
          <p>Accomdation</p>
          <main>
            <div className={`${styles.inputWrapper} `}>
              <input type="radio" name="accomdation" value="Yes" id="acc-yes" />
              <label>Yes</label>
            </div>
            <div className={`${styles.inputWrapper} `}>
              <input type="radio" name="accomdation" value="No" id="acc-no" />
              <label>No</label>
            </div>
          </main>
          <div className={`${styles.inputWrapper} `}>
            <label>No. of guests</label>
            <input type="number" id="guests-num" />
          </div>
          <div className={`${styles.inputWrapper} `}>
            <label>Email</label>
            <input type="email" id="email" />
          </div>
          <div className={`${styles.inputWrapper} `}>
            <input type="checkbox" id="stay" />
            <label>Stay</label>
          </div>
          <div className={`${styles.inputWrapper} `}>
            <input type="checkbox" id="transport" />
            <label>Transport</label>
          </div>
          <div className={`${styles.inputWrapper} `}>
            <label>Transport Mode</label>
            <select id="transport-mode">
              <option value="Road">Road</option>
              <option value="Air">Air</option>
            </select>
          </div>
        </section>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Invitation;
