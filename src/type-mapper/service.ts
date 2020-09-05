import { HandlerFns } from "./type-mappers";

export type Service<Context> = {
  readonly spec: string;
  readonly handlers: HandlerFns;
  readonly createContext: () => Context;
};
