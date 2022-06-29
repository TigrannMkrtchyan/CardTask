import { Context, createContext } from "react";
import axios from "axios";
import env from "../constants/env";
import { ContextProps, CardResponse,PostResponse } from '../types/cards'

interface CardServiceTypes {
    getCards: () => Promise<CardResponse>;
    addCards: (cardNumber: number) => Promise<PostResponse>;
    deleteCards: (cardNumber: number) => Promise<CardResponse>;
}

const url = env.backendUrl

export const CardServiceContext: Context<CardServiceTypes | null> = createContext(null);

const CardService = ({ children }: ContextProps): JSX.Element => {
    const cardService: CardServiceTypes = {
        async getCards(): Promise<CardResponse> {
            try {
                const response = await axios.get(url)
                if (response.data) {
                    return response.data
                }
            }
            catch (err) {
                console.log(err)
            }
        },

        async addCards(cardNumber: number): Promise<PostResponse> {
            try {
                const response = await axios.post(url, { cardNumber: cardNumber })
                if (response.data) {
                    return response.data
                }
            }
            catch (err) {
                console.log(err)
            }
        },

        async deleteCards(cardNumber: number): Promise<CardResponse> {
            try {
                const response = await axios.delete(url, { data: { cardNumber: cardNumber } })
                if (response.data) {
                    return response.data
                }
            }
            catch (err) {
                console.log(err)
            }
        },
    };

    return (
        <CardServiceContext.Provider value={cardService}>{children}</CardServiceContext.Provider>
    )
};

export default CardService;
