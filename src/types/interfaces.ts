export interface MessageType {
  id: string;
  isBot: number;
  message: {
    text: string;
    data?: {
      imgSrc?: string;
    };
  };
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
