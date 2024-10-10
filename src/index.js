import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleForm from './views/ScheduleForm';
import ScheduleController from './controllers/ScheduleController';
import { registerObserver, scheduleObserver } from './observers/Notification';
import './styles.css';

registerObserver(scheduleObserver);  // Registrar o observador

function App() {
  const handleScheduleSubmit = (date, time, type) => {
    ScheduleController.addSchedule(date, time, type);
  };

  return (
    <div className="App">
      <h1>Agendar Coleta de Lixo Reciclável</h1>
      <ScheduleForm onSubmit={handleScheduleSubmit} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));