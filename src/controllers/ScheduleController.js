import ScheduleFactory from '../models/ScheduleFactory';
import { notifyAll } from '../observers/Notification';

class ScheduleController {
  constructor() {
    this.schedules = [];
  }

  addSchedule(date, time, type) {
    const schedule = ScheduleFactory.createSchedule(date, time, type);
    this.schedules.push(schedule);
    notifyAll(schedule);
  }

  getSchedules() {
    return this.schedules;
  }
}

export default new ScheduleController();