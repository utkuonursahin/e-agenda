import { Calendar } from '@mantine/dates';
import {useAgenda} from "../../context/AgendaContext";
import ModalContainer from "../ModalContainer/ModalContainer";
import {useModal} from "../../context/ModalContext";
const CalendarContainer = () => {
  const {chosenDay, setChosenDay, plans} = useAgenda()
  const {isModalOpened, setIsModalOpened, setModalMode} = useModal()
  const handleClick = e => {
    const plan = plans.find(plan => plan.planDay.getDate().toString() === e.target.textContent)
    if(!plan) return
    setModalMode('view')
    setIsModalOpened(prev => !prev)
  }
  return (
      <>
        <Calendar
            value={chosenDay}
            onChange={setChosenDay}
            onClick={handleClick}
            dayStyle={(date) => plans.some(plan =>
                plan.planDay.toString() === date.toString()) ?
                {backgroundColor: '#1287cc', color: 'white'} : null
            }
        />
        {isModalOpened && <ModalContainer/>}
      </>
  )
};

export default CalendarContainer;