class Schedule {
    constructor(date, time, type) {
      this.date = date;
      this.time = time;
      this.type = type; // Tipo de coleta (ex. papel, plástico)
    }
  }
  
  class PaperSchedule extends Schedule {
    constructor(date, time) {
      super(date, time, 'Papel');
    }
  }
  
  class PlasticSchedule extends Schedule {
    constructor(date, time) {
      super(date, time, 'Plástico');
    }
  }
  
  class MetalSchedule extends Schedule {
    constructor(date, time) {
      super(date, time, 'Metal');
    }
  }
  
  class ScheduleFactory {
    static createSchedule(date, time, type) {
      switch (type) {
        case 'Papel':
          return new PaperSchedule(date, time);
        case 'Plástico':
          return new PlasticSchedule(date, time);
        case 'Metal':
          return new MetalSchedule(date, time);
        default:
          throw new Error('Tipo de coleta inválido');
      }
    }
  }
  
  export default ScheduleFactory;