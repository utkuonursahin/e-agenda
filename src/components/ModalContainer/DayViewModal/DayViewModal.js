import {useAgenda} from "../../../context/AgendaContext";

const DayViewModal = () => {
  const {plans,chosenDay} = useAgenda()
  const plan = plans.find(plan => plan.planDay.toString() === chosenDay.toString())
  return (
      <div className="day-modal">
        <span className="day-modal__description">Your plan: {plan.planExp}</span>
        <span className="day-modal__date">
          <svg>
            <use href="./sprite.svg#icon-calendar"/>
          </svg>
          Date: {new Intl.DateTimeFormat('tr-TR').format(plan.planDay)}
        </span>
        <span className="day-modal__starts-at">
          <svg>
            <use href="./sprite.svg#icon-clock"/>
          </svg>
          Starts at: {new Intl.DateTimeFormat('tr-TR',{hour: 'numeric', minute: 'numeric'}).format(plan.planStart)}
        </span>
        <span className="day-modal__ends-at">
          <svg>
            <use href="./sprite.svg#icon-clock"/>
          </svg>
          Ends at: {new Intl.DateTimeFormat('tr-TR',{hour: 'numeric', minute: 'numeric'}).format(plan.planEnd)}
        </span>
      </div>
  );
};

export default DayViewModal;
