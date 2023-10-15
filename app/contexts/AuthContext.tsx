'use client';

import React, { useState, createContext, useEffect } from 'react';
import { User } from '@prisma/client';
import axios from 'axios';

interface State {
  loading: boolean;
  error: string | null;
  user: User | null;
}

interface AuthState extends State {
  setter: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthContext = createContext<AuthState>({
  loading: false,
  error: null,
  user: null,
  setter: () => {},
});

export default ({ children }: { children: React.ReactNode }) => {
  const [auth, setter] = useState<State>({
    loading: true,
    user: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:3000/api/auth/me');
      setter({ ...auth, user: response.data.user });
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        setter,
      }}
    >
      <div>{auth.user && `auth as : ${auth.user.first_name}`}</div>
      {children}
    </AuthContext.Provider>
  );
};
