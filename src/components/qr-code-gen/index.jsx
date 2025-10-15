import { useState } from "react"
import QRCode from 'react-qr-code'
export default function QrCodeGenerator() {
    const [input, setInput] = useState('');
    const [qrCode, setQRCode] = useState('');
    function handleGenerateQRCode() {
        setInput('');
        setQRCode(input)
    }
    return (
        <>
            <h1>
                {input}
            </h1>
            <div>
                <input type="text" name="qr-code" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleGenerateQRCode} disabled={input && input.trim() !== "" ? false : true} >Generate</button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrCode} />
            </div>
        </>
    )
}