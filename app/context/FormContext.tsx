"use client";

import React, { createContext, useContext, useState } from "react";

type FormContextType = {
  canAccessThankYou: boolean;
  allowAccess: () => void;
  lockAccess: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [canAccessThankYou, setCanAccessThankYou] = useState(false);

  const allowAccess = () => setCanAccessThankYou(true);
  const lockAccess = () => setCanAccessThankYou(false);

  return (
    <FormContext.Provider value={{ canAccessThankYou, allowAccess, lockAccess }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormAccess() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormAccess must be used within a FormProvider");
  }
  return context;
}