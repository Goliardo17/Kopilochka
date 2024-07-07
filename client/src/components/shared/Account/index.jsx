import React from "react";
import accountImage from "./images/account.svg";
import openEye from "./images/openEye.svg";
import "./styles/account-large.css";
import "./styles/account-medium.css";
import "./styles/account-small.css";
import "./styles/account-view.css";

export const Account = ({ style, account, action }) => {
  return (
    <div
      className={style}
      onClick={() => action ? action(account) : null}
    >
      <div className="account-wrapper">
        <h4>{account.name}</h4>

        <div className="amount-wrapper">
          <p>
            {Number(account.amount).toFixed(2)} {account.currency}
          </p>

          {style == "account-medium" ? <img src={openEye} /> : null}
        </div>
      </div>

      {style == "account-view" || style == "account-small" ? (
        <div className="image-wrapper">
          <img src={accountImage} />
          <span className="account-currency">{account.currency}</span>
        </div>
      ) : null}
    </div>
  );
};