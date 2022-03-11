import {Modal} from "@mantine/core";
import {useModal} from "../../context/ModalContext";
import CreateModal from "./CreateModal/CreateModal";
import EditModal from "./EditModal/EditModal";
import DeleteModal from "./DeleteModal/DeleteModal";
import DayViewModal from "./DayViewModal/DayViewModal";

const ModalContainer = () => {
  const {isModalOpened, setIsModalOpened, modalMode} = useModal()
  return (
      <Modal opened={isModalOpened} onClose={() => setIsModalOpened(false)} title={`${modalMode.toUpperCase()} Your Plan`}>
        {modalMode === 'create' && <CreateModal/>}
        {modalMode === 'edit' && <EditModal/>}
        {modalMode === 'delete' && <DeleteModal/>}
        {modalMode === 'view' && <DayViewModal/>}
      </Modal>
  );
};

export default ModalContainer;
