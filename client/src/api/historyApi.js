import { history } from "../../../data";

export const fetchHistory = (id) => {
    return new Promise((res) => setTimeout(() => res(history), 500))
}

export const createNewHistory = (form) => {
    return new Promise((res) => setTimeout(() => {
        const newHistory = [...history]
        const data = {
            date: new Date(),
            transfer: form
        }
        
        newHistory.push(data)

        res(newHistory)
    }, 500))
}