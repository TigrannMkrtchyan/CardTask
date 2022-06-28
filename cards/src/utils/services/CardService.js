import { createContext } from "react";
import axios from "axios";
import env from "../constants/env";

const url = env.backendUrl

export const CardServiceContext = createContext();

const CardService = ({ children }) => {
    const cardService = {
        async getCards() {
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

        async addCards(number) {
            try {
                const response = await axios.post(url, { number: number })
                if (response.data) {
                    return response.data
                }
            }
            catch (err) {
                console.log(err)
            }
        },

        async deleteCards(number) {
            try {
                const response = await axios.delete(url, { data: { number: number } })
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
