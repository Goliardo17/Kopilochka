import React, { useEffect, useState } from "react"
import { Input } from "../../ui/Input"
import { List } from "../../ui/List"
import "./categories.css"
import { getUserCategories } from "../../slices/categories/categoriesSlice"
import { useDispatch, useSelector } from "react-redux"

export const Categories = () => {
  const [search, setSearch] = useState("")
  const revenuesCategory = useSelector((state) => state.categories.revenuesCategory)
  const expenditureCategory = useSelector((state) => state.categories.expenditureCategory)
  const dispatch = useDispatch()

  const changeSearch = (value) => {
    setSearch(value)
  }

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getUserCategories(id));
  })
  
  return (
    <>
      <div className="container categories-searching">
        <h2>Найти катгорию</h2>
        <Input 
          style="input-search"
          placeholder="Категории"
          value={search} 
          action={changeSearch}
        />
      </div>

      {
        search.length > 0 ? (
          <div className="container categories-wrapper">
            <List 
              style=""
              add={true}
              array={[]}
            />
          </div>
        ) : (
          <>
            <div className="container categories-wrapper">
              <h3>Доход</h3>
              <List
                style=""
                add={true}
                array={revenuesCategory} 
              />
            </div>

            <div className="container categories-wrapper">
              <h3>Расход</h3>
              <List 
                style=""
                add={true} 
                array={expenditureCategory} 
              />
            </div>
          </>
        )
      }
    </>
  )
}