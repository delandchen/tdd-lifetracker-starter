import axios from "axios";

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl;
        this.token = null;
        this.tokenName = "lifetracker_token";
    }

    setToken(token) {
        this.token = token;
        localStorage.setItem(this.tokenName, this.token);
    }

    async request({endpoint, method = "GET", data = {}}) {
        const url = `${this.remoteHostUrl}/${endpoint}`;
        console.log(url);

        const headers = {
            "Accept":"application/json, text/plain, /",
            "Content-Type": "application/json"
        }


        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`;
        }

        try {
            const res = await axios({url, method, data, headers});
            return {data: res.data, error: null};
        }
        catch (err) {
            console.error({ errorResponse: err.response });
            const message = err?.response?.data?.error?.message;
            return {data: null, error: message || String(error)}
        }
    }

    async loginUser(credentials) {
        return await this.request({endpoint: 'auth/login', method:'POST', data: credentials});
    }

    async signUpUser(credentials) {
        return await this.request({endpoint: 'auth/register', method: 'POST', data: credentials});
    }

    async fetchUserFromToken() {
        return await this.request({endpoint: "auth/me", method:"GET" });
    }

    async logoutUser() {
        this.setToken(null);
        localStorage.removeItem(this.tokenName);
    }

    async createNutrition(values) {
        return await this.request({endpoint: "nutrition/", method:"POST", data: values})
    }

    async getNutrition() {
        return await this.request({endpoint: "nutrition/", method:"GET"})
    }

    async getNutritionById(id) {
        return await this.request({endpoint: `nutrition/id/${id}`, method: "GET"})
    }

    async getAvgCaloriesPerCategory() {
        return await this.request({endpoint:'activity/avgCalories', method: "GET"});
    }

    async getTotalCaloriesPerDay() {
        return await this.request({endpoint:'activity/totalCalories', method: "GET"});
    }
}

export default new ApiClient("https://lifetracker-deland.herokuapp.com/");