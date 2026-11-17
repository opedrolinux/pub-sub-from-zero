import type { Topic, Callback, Message } from './types.ts';

export class Broker {
    private subscriptions = new Map<Topic, Callback[]>();
    
    debug(): void {
  console.log(this.subscriptions);
}

  subscribe(topic: Topic, callback: Callback): void {
    const list = this.subscriptions.get(topic)
    if (list) {
        list.push(callback)
    }
    else {
        this.subscriptions.set(topic, [callback])
    }
  } 

  unsubscribe(topic: Topic, callback: Callback): void {
    // later
  }

  publish(topic: Topic, payload: unknown): void {
    const message: Message = {topic, payload}
    const callbacks = this.subscriptions.get(topic)
    if (!callbacks) {
        return; 
    }
    for (const call of callbacks) {
        call(message)
    }
  }
}