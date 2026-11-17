export type Topic = string;

export type Message = {
    topic: Topic;
    payload: unknown;
}; 

export type Callback = (message: Message) => void;

export type Subscription = {
    topic: Topic;
    callback: Callback;
};

