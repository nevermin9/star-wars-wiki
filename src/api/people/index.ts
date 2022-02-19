import { httpService } from "@/services/HttpService";

const getPeopleByPage = async ({ page }: { page: string | number }) => {
    try {
        const response = await httpService.get("/people", { params: { page, } });
        return response.data;
    } catch (error) {
        // there must be error logger;
        console.error("API_CALL_ERROR: getPeopleByPage", error);
        throw error;
    }
};


export default {
    getPeopleByPage,
}