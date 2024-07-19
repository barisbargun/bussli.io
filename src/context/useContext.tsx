import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface IContext {
  exNumber: number;
  exSetNumber: Dispatch<SetStateAction<number>>;
}

const INITIAL_STATE = {
  exNumber: 0,
  exSetNumber: () => null,
};

const DataContext = createContext<IContext>(INITIAL_STATE);

export const DataProvider = ({ children, ...props }: ContextProviderProps) => {
  const [exNumber, exSetNumber] = useState(INITIAL_STATE.exNumber);

  const value = {
    exNumber,
    exSetNumber,
  };

  return (
    <DataContext.Provider {...props} value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const _useContext = () => useContext(DataContext);
