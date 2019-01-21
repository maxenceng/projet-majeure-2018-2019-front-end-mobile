import socketIOClient from 'socket.io-client';
import { BASE_URL } from './common';

export default class Socket {
  constructor() {
    this.socket = socketIOClient(BASE_URL);
    this.rules = [];
  }

  on = (name, func) => {
    if (!this.rules.includes(name)) {
      this.socket.on(name, func);
    }
  }

  emit = (name, obj = null) => this.socket.emit(name, obj);
}
