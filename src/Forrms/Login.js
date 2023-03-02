import { useState,useEffect } from "react";
import data from "./mobileCode.json";

export default function Login() {
    const [mobileCode, setMobileCode] = useState(data);
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (event) => {
        console.log(event.target.value);
        setSelectedValue(event.target.value);
    };
    return (
        <form className="form">
            <h1>Create Account</h1>
            <div className="form-field">
            <p>Your name</p>
            <input type="name"/>
            </div>
            <div className="form-field">
            <p>Mobile number</p>
            <div className="mobile">
            <div className="true">{selectedValue}</div>
            <select onChange={handleSelectChange}>
            {mobileCode.map(item => (
                <option value={item.name + item.dial_code}>
                    <p>{item.name} {item.dial_code}</p>
                </option>
            ))}
      </select>
            <input type="number"/>
            </div>
            </div>
        </form>
    );
}