import CalendarContainer from "./components/CalendarContainer/CalendarContainer";
import Buttons from "./components/Buttons/Buttons";
import {AgendaProvider} from "./context/AgendaContext";
import {ModalProvider} from "./context/ModalContext";
import { NotificationsProvider } from '@mantine/notifications';
import './styles/main.scss';
function App() {
  return (
      <NotificationsProvider position="bottom-right" zIndex={2077}>
        <AgendaProvider>
          <ModalProvider>
            <CalendarContainer/>
            <Buttons/>
          </ModalProvider>
        </AgendaProvider>
      </NotificationsProvider>
  );
}

export default App;
