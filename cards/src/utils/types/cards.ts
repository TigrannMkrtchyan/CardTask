import { ReactNode } from "react";

export interface GetCardResponse {
  success: boolean;
  data: number[];
}

export interface PostResponse {
  success: boolean;
  data: number;
}

export interface ContextProps {
  [key: string]: string | ReactNode;
}
