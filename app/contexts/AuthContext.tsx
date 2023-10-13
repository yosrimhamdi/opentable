import { User } from '@prisma/client';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface X {
  loading: boolean;
  user: User | null;
  error: string | null;
}

interface SetterType {
  setter: Dispatch<SetStateAction<X>>;
}

interface AuthContextType extends X {
  setter?: SetterType;
}

const Context = createContext({
  loading: false,
  user: null,
  error: null,
});

export default ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthContextType>({
    loading: false,
    user: null,
    error: null,
  });

  return (
    <Context.Provider
      value={{
        ...auth,
        setter: setAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
};
