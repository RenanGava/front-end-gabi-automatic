"use client";
import { api } from "@/utils/axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInProps {
  email: string;
  password: string;
}

type TokensType = "jwt" | "user";

export interface CreateUserProps {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthContextProps {
  signIn: (credentials: SignInProps) => Promise<boolean>;
  signOut: () => void;
  user: UserProps | null;
}

const AuthContext = createContext({} as AuthContextProps);

export function signOut() {
  destroyCookie(null, "jwt");
  destroyCookie(null, "user");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>({} as UserProps);

  useEffect(() => {
    async function handleConect() {
      const tokens = parseCookies();

      if (tokens.jwt) {
        setUser({ ...JSON.parse(tokens.user), token: tokens.jwt });
        // redirect("/dashboard");
      } else {
        redirect("/");
      }
    }

    handleConect();
  }, []);

  async function signIn({ email, password }: SignInProps) {
    if (email != "" && password != "") {
      try {
        const { data } = await api.get("/auth/", {
          params: {
            email,
            password,
          },
        });

        createCookie("jwt", data.token);
        createCookie("user", JSON.stringify(data.userData));
        setUser({ ...data.userData, token: data.token });

        return true;
      } catch (e) {
        toast.error("Usuario invalid!");
      }
    }

    return false;
  }

  async function createCookie(key: TokensType, value: string) {
    setCookie(null, key, value);
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UseAuth() {
  return useContext(AuthContext);
}
