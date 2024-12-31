// src/components/Web3AuthLogin.jsx
import React, { useState, useEffect } from "react";
import { initWeb3Auth, connectWallet, disconnectWallet } from "../lib/Web3auth";

const Web3AuthLogin = () => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        setLoading(true);
        await initWeb3Auth();
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      } finally {
        setLoading(false);
      }
    };
    initialize();
  }, []);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const provider = await connectWallet();
      const accounts = await provider.request({ method: "eth_accounts" });
      setAddress(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await disconnectWallet();
      setAddress(null);
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <p>Cargando...</p>
      ) : address ? (
        <div>
          <p>Conectado como: {address}</p>
          <button onClick={handleLogout} className="btn">Desconectar</button>
        </div>
      ) : (
        <button onClick={handleLogin} className="btn">Iniciar sesión</button>
      )}
    </div>
  );
};

export default Web3AuthLogin;
