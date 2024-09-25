"use client";
import { createContext, useContext, useState } from "react";
import { Loading } from "@/ui/components/loading";
import { Toaster } from "react-hot-toast";

type InterfaceAction = () => void;

interface UIContext {
  loading: {
    on: InterfaceAction;
    off: InterfaceAction;
    state: boolean;
  };
}

const DEFAULT_VALUES = {
  loading: {
    on: () => {},
    off: () => {},
    state: false,
  },
};

const UIContext = createContext<UIContext>(DEFAULT_VALUES);

export const useUIContext = () => {
  const context = useContext(UIContext);

  if (context === undefined) {
    throw new Error("Missing UIContext on React three");
  }

  return context;
};

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadingScreen, setLoadingScreen] = useState<boolean>(
    DEFAULT_VALUES.loading.state
  );
  const showLoadingScreen = () => {
    setLoadingScreen(true);
  };
  const hideLoadingScreen = () => {
    setLoadingScreen(false);
  };

  const value = {
    loading: {
      on: showLoadingScreen,
      off: hideLoadingScreen,
      state: loadingScreen,
    },
  };

  return (
    <UIContext.Provider value={value}>
      <Toaster position="top-right" key="notification-bar" />
      <Loading />
      {children}
    </UIContext.Provider>
  );
};
