export interface MessageType {
  id: number;
  isBot: number;
  message: string;
}

export interface OutputType {
  data: {};
  disableSensitiveLogging: boolean;
  source: string;
  text: string;
  traceId: string;
}


export interface IAction {
  type: string;
  payload: MessageType;
}
