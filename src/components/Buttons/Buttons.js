import {Button} from "@mantine/core";
import {useModal} from "../../context/ModalContext";
import {useAgenda} from "../../context/AgendaContext";

const Buttons = () => {
  const {chosenDay, plans} = useAgenda()
  const {setIsModalOpened, setModalMode} = useModal()
  const handleClick = e => {
    if(e.target.tagName !== 'SPAN' || !chosenDay) return
    const mode = e.target.parentElement.parentElement.dataset.modalMode
    if(mode === 'create' && !plans.some(plan => plan.planDay.toString() === chosenDay?.toString())){
      setModalMode(mode)
      setIsModalOpened(prev => !prev)
    }
    else if((mode === 'edit' || mode === 'delete') && plans.some(plan => plan.planDay.toString() === chosenDay?.toString())){
      setModalMode(mode)
      setIsModalOpened(prev => !prev)
    }
  }
  return (
      <section className="buttons" onClick={handleClick}>
        <Button className="btn-create" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} data-modal-mode='create'>
          <svg>
            <use href="./sprite.svg#icon-pluscircle"/>
          </svg>
          Create
        </Button>

        <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} data-modal-mode='edit'>
          <svg>
            <use href="./sprite.svg#icon-edit"/>
          </svg>
          Edit
        </Button>

        <Button variant="outline" color="red" data-modal-mode='delete'>
          <svg>
            <use href="./sprite.svg#icon-trash"/>
          </svg>
          Delete
        </Button>
      </section>
  );
};

export default Buttons;
