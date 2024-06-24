import React from "react";
// Media
import accountImage from "./image/account.svg";
import openEye from "./image/openEye.svg";
import closeEye from "./image/closeEye.svg";
// Styles
import "./styles/account-large.css";
import "./styles/account-medium.css";
import "./styles/account-small.css";
import "./styles/account-view.css";

export const Account = ({ style, account, action }) => {
  return (
    <div
      className={style}
      onClick={() =>
        action ? action(account) : null
        // style === "account-small" || style === "account-view"
        //   ? action(account)
        //   : null
      }
    >
      <div className="account-wrapper">
        <h4>{account.name}</h4>

        <div className="amount-wrapper">
          <p>
            {account.amount} {account.currency}
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

// сделать скрывающееся состояние суммы на счете
// добавить <span>
// добавить навигацию
