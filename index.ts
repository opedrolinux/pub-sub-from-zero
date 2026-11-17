import { Broker } from './broker.ts';

const broker = new Broker();
broker.subscribe('One', (message) => console.log(message));
broker.subscribe('One', (message) => console.log(message));
broker.subscribe('Two', (message) => console.log(message));
broker.publish('One', 42);
broker.publish('Two', 'hello');
broker.debug()
