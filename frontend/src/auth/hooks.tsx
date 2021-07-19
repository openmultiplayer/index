import React, { FunctionComponent } from "react";

import { apiSSP, apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/generated_error";
import { UserModel } from "src/types/generated_user";

type AuthenticationContext = {
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = React.createContext<AuthenticationContext>({
  isAuthenticated: false,
  isLoading: true,
  setAuthenticated: (_: any) => {},
});

// to be used in _app.tsx where `authenticated` is set
export const AuthProvider: FunctionComponent = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const initializeAuth = async () => {
      const response = await apiSSP<UserModel, APIError>("/users/self");

      try {
        response.unwrap();
        setAuthenticated(true);
      } catch (_) {
        setAuthenticated(false);
      }
      setLoading(false);
    };
    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthenticationContext {
  const context = React.useContext<AuthenticationContext>(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider context");
  }
  return context;
}

export function useIsAuthenticated(): boolean {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
}
