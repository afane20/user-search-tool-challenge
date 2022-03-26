const server = process.env.REACT_APP_BAKEND + 'api';

class RequestApi {

    static async get(view = '', config = {}) {
        try {
            const resp = await fetch(server + "/" + view, {
                mode: "cors",
                // headers: this.authHeader(),
                ...config,
            });
            return await resp.json();
        } catch (error) {
            console.log("ERROR GET: ", error);
            return [];
        }
    }

    static async post(view, data) {
        try {
            const resp = await fetch(server + "/" + view, {
                method: "POST",
                body: JSON.stringify(data),
                // headers: this.authHeader(),
            });
            return await resp.json();
        } catch (error) {
            console.log("ERROR POST: ", error);
            return {};
        }
    }

    static async put(view, data, id) {
        try {
            const resp = await fetch(
                server + "/" + view + "/" + id,
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                    // headers: this.authHeader(),
                }
            );
            return await resp.json();
        } catch (error) {
            console.log("ERROR PUT: ", error);
            return {};
        }
    }

    static async patch(view, data, id) {
        try {
            const resp = await fetch(
                server + "/" + view + "/" + id,
                {
                    method: "PATCH",
                    body: JSON.stringify(data),
                    // headers: this.authHeader(),
                }
            );
            return await resp.json();
        } catch (error) {
            console.log("ERROR PUT: ", error);
            return {};
        }
    }

    static async delete(view, id) {
        try {
            const request = new Request(
                server + "/" + view + "/" + id,
                {
                    method: "DELETE",
                    // headers: this.authHeader(),
                }
            );
            const resp = await fetch(request);
            return await resp.json();
        } catch (error) {
            console.log("ERROR DELETE: ", error);
            return {};
        }
    }

}

export default RequestApi;