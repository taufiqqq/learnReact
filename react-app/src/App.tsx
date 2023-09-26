import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import algosdk from "algosdk";

const algodToken = ''; // Your AlgoD API token
const algodServer = 'https://testnet-api.algonode.cloud'; // AlgoD API server
const algodPort = '443';
const senderMnemonic = 'leader judge flock cargo maid pretty junior sound squirrel frequent palace ignore machine nominee vibrant peace canyon expand tomorrow tomorrow custom agree fatal able scale'; // The sender's mnemonic (private key) to sign transactions

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

function App() {
  let items = ["New York", "Johor Bahru", "Mersing", "Paris", "Singapore"];

  const handleSelectItem = (item: string  ) => {
    console.log(item);
  };

  return (
    <>
      <a onClick={deductEventCost} href="#">Test</a>
      <div>
        <Alert>
          Hello <br></br>World
        </Alert>
      </div>
    </>
  );
}

async function deductEventCost() {
  try {
    const senderAccount = algosdk.mnemonicToSecretKey(senderMnemonic);

    // Create a transaction to interact with the smart contract
    const txnParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makePaymentTxnWithSuggestedParams(
      senderAccount.addr,
      'TU7D7HZGH572F4TWBLCTLJWCLCW54TQ2LBQBLG7Y4OMARKXK3EYYLLC73U', // Replace with the receiver's address
      100000, // Amount in microAlgos (100 Algos)
      undefined,
      undefined,
      txnParams
    );

    // Sign the transaction
    const signedTxn = algosdk.signTransaction(txn, senderAccount.sk);

    // Submit the transaction to the Algorand network
    const txId = await algodClient.sendRawTransaction(signedTxn.blob).do();

    console.log(`Transaction ID: ${txId}`);
    console.log('Event cost deducted successfully.');
  } catch (error) {
    console.error('Error deducting event cost:', error);
  }
}

export default App;
