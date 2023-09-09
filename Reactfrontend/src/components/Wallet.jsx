import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigateTo = useNavigate();

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        window.alert("Wallet Connected: " + accounts[0]);
        navigateTo("/home", {
          state: { address: accounts[0] },
        });
      } else {
        alert("Install Metamask First!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1>Wallet Page</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
    </>
  );
};

export default Wallet;
