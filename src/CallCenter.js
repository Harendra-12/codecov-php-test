import React, { useEffect, useState, useMemo } from "react";
import { useSIPProvider } from "react-sipjs";

export default function CallCenter({ extension, password }) {
  const {
    connectAndRegister,
    connectStatus,
    sessionManager,
    sessions,
  } = useSIPProvider();

  const [destUser, setDestUser] = useState("");

  useEffect(() => {
    connectAndRegister({
      username: extension,
      password,
    });
  }, [connectAndRegister, extension, password]);

  const sessionList = useMemo(() => {
    if (!sessions) return [];
    if (Array.isArray(sessions)) return sessions;
    return Object.values(sessions);
  }, [sessions]);

  const requestMicPermission = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    console.log("Microphone permission granted");
  } catch (err) {
    alert("Microphone permission is required for calling");
  }
};

 const makeCall = async () => {
  if (!destUser || !sessionManager) return;

  await requestMicPermission();

  await sessionManager.call(
    `sip:${destUser}@${connectStatus.domain}`
  );
};


  return (
    <div>
      <h3>Status: {connectStatus?.status}</h3>

      <input
        type="text"
        placeholder="Destination (e.g. 101)"
        value={destUser}
        onChange={(e) => setDestUser(e.target.value)}
      />
      <button onClick={makeCall}>Call</button>

      <h4>Active Sessions</h4>
      {sessionList.map((s) => (
        <div key={s.id}>
          <p>ID: {s.id}</p>
          <p>State: {s.state}</p>
        </div>
      ))}
    </div>
  );
}
