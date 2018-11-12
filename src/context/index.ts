import { createContext } from 'react';

export const MyContext: React.Context<any> = createContext(undefined as any);
export const MyProvider = MyContext.Provider;
export const MyConsumer = MyContext.Consumer;