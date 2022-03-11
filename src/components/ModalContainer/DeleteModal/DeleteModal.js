import {useAgenda} from "../../../context/AgendaContext";
import {useModal} from "../../../context/ModalContext";
import {Button} from "@mantine/core";
import {useNotifications} from "@mantine/notifications";

const DeleteModal = () => {
  const {chosenDay, plans, setPlans} = useAgenda()
  const {setIsModalOpened} = useModal()
  const notifications = useNotifications()
  const handleClick = () => {
    setPlans(prev => prev.filter(plan => plan.planDay.toString() !== chosenDay.toString()))
    setIsModalOpened(prev => !prev)
    notifications.showNotification({
      title: 'Plan DELETED!',
      message: 'You successfully deleted your plan.',
      color: "red"
    })
  }
  return (
      <div className="delete-modal">
        <h1>You are deleting given plan, are you sure?</h1>
        <span>Day: {new Intl.DateTimeFormat('tr-TR').format(chosenDay)}</span>
        <span>Plan: {plans.find(plan => plan.planDay.toString() === chosenDay.toString())?.planExp}</span>
        <Button color="red" onClick={handleClick}> Delete</Button>
      </div>

  );
};

export default DeleteModal;