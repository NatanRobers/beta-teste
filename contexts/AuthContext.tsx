"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

type AuthContextValue = {
  user: User | null;
  carregando: boolean;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const cancelarInscricao = onAuthStateChanged(auth, (usuarioAtual) => {
      setUser(usuarioAtual);
      setCarregando(false);
    });
    return cancelarInscricao;
  }, []);

  async function login(email: string, senha: string) {
    await signInWithEmailAndPassword(auth, email, senha);
  }

  async function logout() {
    await signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, carregando, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const contexto = useContext(AuthContext);
  if (!contexto) {
    throw new Error("useAuth precisa ser usado dentro de um <AuthProvider>");
  }
  return contexto;
}
