import {Button, TextInput} from "@mantine/core";
import {TimeInput} from "@mantine/dates";
import {useState} from "react";
import {useAgenda} from "../../../context/AgendaContext";
import {useModal} from "../../../context/ModalContext";
import { useNotifications } from '@mantine/notifications';

const CreateModal = () => {
  const {chosenDay,setPlans} = useAgenda()
  const {setIsModalOpened} = useModal()
  const notifications = useNotifications()

  const handleSubmit = e => {
    e.preventDefault()
    setPlans(prev => [...prev, {
        planDay: chosenDay,
        planStart: timeStart,
        planEnd: timeEnd,
        planExp: planInput
      }
    ])
    setIsModalOpened(prev => !prev)
    notifications.showNotification({
      title: 'Excellent! ',
      message: 'You created a new plan. Keep working :)',
      color: "#499fe8"
    })
  }

  const [planInput, setPlanInput] = useState('')
  const [timeStart, setTimeStart] = useState(new Date())
  const [timeEnd, setTimeEnd] = useState(new Date())

  return (
      <form onSubmit={handleSubmit}>
        <TextInput placeholder="Enter your plan" label="What is your plan?"
        value={planInput} onChange={e => setPlanInput(e.target.value)}/>
        <TimeInput label="When does your plan start?" value={timeStart} onChange={setTimeStart} />
        <TimeInput label="When does your plan ends?" value={timeEnd} onChange={setTimeEnd} />
        <Button type="submit">Create Plan</Button>
      </form>
  );
};

export default CreateModal;
