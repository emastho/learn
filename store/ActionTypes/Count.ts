interface Increment {
  type: "INCREMENT";
  payload?: number;
}

interface Decrement {
  type: "DECREMENT";
  payload?: number;
}

interface FetchFulfilled {
  type: "FETCH_FULFILLED";
  payload: any;
}

interface FetchRejected {
  type: "FETCH_REJECTED";
  payload: { e: string };
}

export type Action = Increment | Decrement | FetchFulfilled | FetchRejected;
