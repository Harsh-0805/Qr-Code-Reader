import React from 'react'
import { useState } from "react";
import QrReader from "react-qr-reader";
import '../styles.css';
const QrScanner = () => {
    const [code, setCode] = useState(null);
    const [precScan, setPrecScan] = useState("");
    const [selected, setSelected] = useState("environment");
    const [errorMessage, setErrorMessage] = useState(null);
    const [data, setData] = useState(null);
    const [event, setEvent] = useState("");
    const handleScan = async (scanData) => {
        console.log(`loaded data data`, scanData);
        if (scanData && scanData !== "") {
            console.log(`loaded >>>`, scanData);
            setData(scanData);
        }
    };
    const handleError = (err) => {
        console.error(err);
    };
    const { id, isRegistered } = JSON.stringify(data)
    console.log(event);
    return (
        <div>
            <h1 >Scan The QR</h1>
            <select onChange={(e) => { setEvent(e.target.value) }}>
                <option>Event 1</option>
                <option>Event 2</option>
                <option>Event 3</option>
            </select>

            <QrReader
                facingMode={selected}
                delay={500}
                onError={handleError}
                onScan={handleScan}
                // chooseDeviceId={()=>selected}
                style={{ width: "500px", heigth: "500px", margin: "50px" }}
            />
            <button onClick={()=>{
                setData("")
            }}>Scan</button>
            <div>
                {data}
                {event}
            </div>

        </div>
    )
}

export default QrScanner
