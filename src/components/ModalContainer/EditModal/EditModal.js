import {useState} from 'react';
import {useAgenda} from "../../../context/AgendaContext";
import {useModal} from "../../../context/ModalContext";
import {Button, TextInput} from "@mantine/core";
import {TimeInput} from "@mantine/dates";
import {useNotifications} from "@mantine/notifications";

const EditModal = () => {
  const {chosenDay, plans, setPlans} = useAgenda()
  const {setIsModalOpened} = useModal()
  const notifications = useNotifications()
  const handleSubmit = e => {
    e.preventDefault()
    //remove chosen plan, then create it again
    setPlans(prev => [...prev.filter(plan => plan.planDay.toString() !== chosenDay.toString()),{
      planDay: chosenDay,
      planStart: timeStart,
      planEnd: timeEnd,
      planExp: planInput
    }])
    setIsModalOpened(prev => !prev)
    notifications.showNotification({
      title: 'Successful!',
      message: 'You edited your plan successfully, what\'s next?',
      color: "green"
    })
  }
  const [planInput, setPlanInput] = useState(plans.find(plan => plan.planDay.toString() === chosenDay.toString())?.planExp)
  const [timeStart, setTimeStart] = useState(new Date(plans.find(plan => plan.planDay.toString() === chosenDay.toString())?.planStart))
  const [timeEnd, setTimeEnd] = useState(new Date(plans.find(plan => plan.planDay.toString() === chosenDay.toString())?.planEnd))
  return (
      <form onSubmit={handleSubmit}>
        <TextInput placeholder="Your plan" label="Plan Description"
                   value={planInput} onChange={e => setPlanInput(e.target.value)}/>
        <TimeInput label="When does your plan start?" value={timeStart} onChange={setTimeStart} />
        <TimeInput label="When does your plan ends?" value={timeEnd} onChange={setTimeEnd} />
        <Button type="submit" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} >Apply Changes</Button>
      </form>

  );
};

export default EditModal;
