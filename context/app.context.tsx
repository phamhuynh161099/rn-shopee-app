import { createContext, useContext, useState } from "react";

interface AppContextType {
  theme: string;
  setTheme: (c: string) => void;
  appState: any;
  setAppState: (c: any) => void;

  cart: any | Record<string, never>;
  setCart: (c: any) => void;
}

const AppContext = createContext<AppContextType | null>(null);

interface IProps {
  children: React.ReactNode;
}

export const useCurrentApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useCurrentApp must be used within an AppProvider");
  }
  return context;
};

const AppProvider = (props: IProps) => {
  const [theme, setTheme] = useState<string>("");
  const [appState, setAppState] = useState();
  const [cart, setCart] = useState<any | Record<string, never>>({});

  return (
    <AppContext.Provider
      value={{ theme, setTheme, appState, setAppState, cart, setCart }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
