const observers = [];

export const registerObserver = (observer) => {
  observers.push(observer);
};

export const notifyAll = (schedule) => {
  observers.forEach((observer) => observer.update(schedule));
};

// Observador simples que envia um alerta quando um novo agendamento é criado
export const scheduleObserver = {
  update: (schedule) => {
    console.log(`Novo agendamento de coleta de ${schedule.type} para o dia ${schedule.date} às ${schedule.time}`);
  },
};