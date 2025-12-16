import React, { useState, useEffect, useRef } from 'react';

const WebSocketChat = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isConnected, setIsConnected] = useState(false);
    const ws = useRef(null); // WebSocket kapcsolat tárolása

    // Csatlakozás a WebSocket szerverhez
    const connectToWebSocket = () => {
        ws.current = new WebSocket('ws://localhost:8080');

        ws.current.onopen = () => {
            console.log('Csatlakozás a WebSocket szerverhez sikeres');
            setIsConnected(true);
            ws.current.send(JSON.stringify({ username })); // Felhasználónév elküldése
        };

        ws.current.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]); // Új üzenet hozzáadása
        };

        ws.current.onclose = () => {
            console.log('WebSocket kapcsolat bontva');
            setIsConnected(false);
        };
    };

    // Üzenet küldése a szervernek
    const sendMessage = () => {
        if (message.trim() && ws.current && isConnected) {
            const msgData = {
                username: username,
                text: message
            };
            ws.current.send(JSON.stringify(msgData));
            setMessage(''); // Üzenetmező törlése
        }
    };

    // A WebSocket kapcsolat bezárása komponens elhagyásakor
    useEffect(() => {
        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    return (
        <div>
            <h1>WebSocket Chat</h1>

            {!isConnected ? (
                <div>
                    <input
                        type="text"
                        placeholder="Felhasználónév"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={connectToWebSocket} disabled={!username.trim()}>
                        Csatlakozás
                    </button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Írd be az üzenetet"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={sendMessage} disabled={!message.trim()}>
                        Üzenet küldése
                    </button>

                    <ul>
                        {messages.map((msg, index) => (
                            <li key={index}>{msg}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default WebSocketChat;
