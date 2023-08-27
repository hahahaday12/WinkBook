import { createContext } from "react";


type TokenContextProps = {
    token: string | null;
    setToken: (newToken: string) => void;
  }

export const TokenContext = createContext<TokenContextProps | undefined>(undefined);

