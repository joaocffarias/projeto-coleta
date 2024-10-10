import React, { useState } from 'react';

function ScheduleForm({ onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('Papel');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(date, time, type);
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Data:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Hora:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <label>
        Tipo de Coleta:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Papel">Papel</option>
          <option value="Plástico">Plástico</option>
          <option value="Metal">Metal</option>
        </select>
      </label>
      <button type="submit">Agendar Coleta</button>
    </form>
  );
}

export default ScheduleForm;