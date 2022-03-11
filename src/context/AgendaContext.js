import {createContext, useContext, useState} from "react";

const AgendaContext = createContext()

const AgendaProvider = ({ children }) => {
  const [chosenDay, setChosenDay] = useState(null)
  const [plans, setPlans] = useState([])
  const values = {chosenDay, setChosenDay, plans, setPlans}
  return <AgendaContext.Provider value={values}>{children}</AgendaContext.Provider>
}
const useAgenda = () => useContext(AgendaContext)
export { AgendaProvider, useAgenda }