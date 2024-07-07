import React from "react";
import { List } from "../../../List";
import hideImage from "../../images/hide.svg";
import showImage from "../../images/show.svg";

export const SelectCurrency = ({ style, item, label, array, vis, action }) => {
  return (
    <>
      <div className={style}>
        <div className="select-content">
          <p>{label}</p>
          {item.name ? (
            <>
              <p>
                {item.name}/{item.exchange.source}
              </p>
            </>
          ) : null}
        </div>

        <div className="select-decorate">
          <img src={vis ? hideImage : showImage} width="30px" />
        </div>
      </div>
      {vis ? (
        <List
          style="list-currency"
          select={true}
          array={array}
          action={action}
        />
      ) : null}
    </>
  );
};
