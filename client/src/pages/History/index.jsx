import React, { useEffect } from "react"
import { List } from "../../ui/List"
import { useDispatch, useSelector } from "react-redux"
import "./history.css"
import { getUserHistory } from "../../slices/histories/historiesSlice"

export const History = () => {
  const history = useSelector((state) => state.histories.history)
  const dispatch = useDispatch()

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getUserHistory(id))
  }, [])

  return (
    <div className="container histories">
      <h2>История операций</h2>
      <div>
        <select>по дате</select>
        <select>по сумме</select>
        <select>по категории</select>
      </div>
      <List
        style=""
        array={history}  
      />
    </div>
  )
}