import { ReactNode } from "react";

export interface CardResponse {
  success: boolean;
  data:  number[] ;
}

export interface PostResponse {
  success: boolean;
  data:  number;
}
export interface ContextProps {
  [key: string]: string | ReactNode;
}
