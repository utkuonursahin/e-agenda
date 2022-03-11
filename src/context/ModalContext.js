import {createContext, useContext, useState} from "react";

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [modalMode, setModalMode] = useState(null)
  const values = {isModalOpened, setIsModalOpened, modalMode, setModalMode}
  return <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
}
const useModal = () => useContext(ModalContext)
export { ModalProvider, useModal }