import React from "react"
import { List } from "../../../List"
import defaultImage from "../../images/account.svg"

export const SelectAccount = ({style, item, label, array, vis, action}) => {
  return(
    <>
      <div className={style}>
        <div className="select-content">
          <p>{label}</p>
          {item.name ? (
            <>
              <p>
                {item.name}/{item.amount / 100} {item.currency}
              </p>
            </>
          ) : null}
        </div>

        <div className="select-decorate">
          {item.image ? (
            <img src={item.image ? item.image : defaultImage} width="30px" />
          ) : null}
        </div>
      </div>
      {
        vis ? (
          <List
            style="list-account-vertical"
            select={true}
            array={array}
            action={action}
          />
        ) : null
      }
    </>
  )
}