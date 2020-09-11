import React, { Fragment, useState } from "react";
import Transactions from "../transactions/Transactions";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";


const PendingTransactions = ({ blockchainService, displayAlert }) => {
 
=======

const PendingTransactions = ({ blockchainService, displayAlert }) => {
  console.log(blockchainService);
>>>>>>> 7be6aafe50b9e8a055b0d2a4bb5c498410a4935c
  const [renderInfo, setRenderInfo] = useState(false);

  const displayMiningInfo = () => setRenderInfo(true);

<<<<<<< HEAD
  let history = useHistory();

=======
>>>>>>> 7be6aafe50b9e8a055b0d2a4bb5c498410a4935c
  const minePendingTransactions = () => {
    blockchainService.minePendingTransactions();
    displayAlert(
      "New Block has been successfully created and added to the blockchain."
    );
    setRenderInfo(false);
<<<<<<< HEAD
    history.push("/");
=======
>>>>>>> 7be6aafe50b9e8a055b0d2a4bb5c498410a4935c
  };

  return (
    <Fragment>
      <div className="container">
        <h1>Pending transactions</h1>
        <p>
          These transactions are waiting to be included in the next block. Next
          block is created when you start the mining process.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <Transactions
            transactions={
              blockchainService.blockchainInstance.pendingTransactions
            }
            index={"none"}
            blockchainService={blockchainService}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            displayMiningInfo();
            setTimeout(() => minePendingTransactions(), 5000);
          }}
          style={{ marginTop: "2rem" }}
        >
          Start mining
        </button>
        <div
          className="alert alert-success"
          role="alert"
          style={{ display: renderInfo ? "block" : "none" }}
        >
          ...mining new block... <started className=""></started>{" "}
        </div>
      </div>
    </Fragment>
  );
};

export default PendingTransactions;
