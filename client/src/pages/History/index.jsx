import React, { useEffect } from "react"
import { List } from "../../components/shared/List"
import { useDispatch, useSelector } from "react-redux"
import "./history.css"
import { getUserHistory } from "../../slices/histories/historiesSlice"

export const History = () => {
  const history = useSelector((state) => state.histories.history)
  const dispatch = useDispatch()

  useEffect(() => {
    const id = sessionStorage.getItem("id")
    dispatch(getUserHistory(id))
  }, [])

  return (
    <div className="container histories">
      <h2>История операций</h2>
      <List
        style="list-history"
        array={history}  
      />
    </div>
  )
}