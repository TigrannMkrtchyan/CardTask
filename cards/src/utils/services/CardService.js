import { createContext } from "react";
import axios from "axios";
import env from "../constants/env";

const url = env.backendUrl

export const CardServiceContetx = createContext();

const CardService = ({ children }) => {

    const cardService = {

        async getCards() {
            try {
                const response = await axios.get(url)
                return response.data
            }
            catch (err) {
                console.log(err)
            }
        },

        async addCards(number) {
            try {
                const response = await axios.post(url, { number: number })
                return response.data
            }
            catch (err) {
                console.log(err)
            }
        },

        async sortCards() {
            try {
                const response = await axios.put(url)
                return response.data
            }
            catch (err) {
                console.log(err)
            }
        },

        async deleteCards(number) {
            try {
                const response = await axios.delete(url, { data: { number: number }, headers: { "Authorization": "***" } })
                return response.data
            }
            catch (err) {
                console.log(err)
            }
        },
    };

    return (
        <CardServiceContetx.Provider value={cardService}>{children}</CardServiceContetx.Provider>
    )
};

export default CardService;
