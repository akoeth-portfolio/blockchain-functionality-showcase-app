import React, { Fragment } from "react";

const Block = ({ block, index, clickHandler }) => {
  return (
    <Fragment>
      <div
        className="card"
        onClick={clickHandler}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            Block {index}{" "}
            <small className="text-muted">
              {block.transactions === "Genisis block" && "Genesis block"}
            </small>
          </h5>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="">Hash</span>

            <div className="text-truncate">
              <small>{block.hash}</small>
            </div>

            <span className="">Hash of previous block</span>

            <div className="text-truncate">
              <small>{block.previousHash}</small>
            </div>
          </li>

          <li className="list-group-item">
            <span className="">Nonce</span>
            <div className="text-truncate text-muted">
              <small>{block.nonce}</small>
            </div>
          </li>

          <li className="list-group-item">
            <span className="">Timestamp</span>
            <div className="text-truncate text-muted">
              <small>{block.timestamp}</small>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Block;
