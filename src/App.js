import React, { useState } from "react";
import { SIPProvider } from "react-sipjs";
import CallCenter from "./CallCenter";

export default function App() {
  const [domain, setDomain] = useState("");
  const [wsServer, setWsServer] = useState("");
  const [extension, setExtension] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {!registered ? (
        <>
          <h2>SIP Login</h2>
          <input
            type="text"
            placeholder="SIP Domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          /><br/>
          <input
            type="text"
            placeholder="WebSocket Server (wss://…)"
            value={wsServer}
            onChange={(e) => setWsServer(e.target.value)}
          /><br/>
          <input
            type="text"
            placeholder="Extension"
            value={extension}
            onChange={(e) => setExtension(e.target.value)}
          /><br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button onClick={() => setRegistered(true)}>Connect</button>
        </>
      ) : (
        <SIPProvider
          options={{
            domain: domain,
            webSocketServer: wsServer,
          }}
          // you can set debug to true to see SIP logs in console
          debug={true}
        >
          <CallCenter extension={extension} password={password} />
        </SIPProvider>
      )}
    </div>
  );
}
