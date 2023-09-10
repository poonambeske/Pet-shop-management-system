import axios from 'axios';

const USER_LOGIN_BASE_URL = 'http://localhost:5010';

class LoginAPI {

    Login(email, password) {
        return axios.get(USER_LOGIN_BASE_URL + '/login?email=' + email + '&password=' + password);
    }

    forgotpass(em) {
        return axios.post(USER_LOGIN_BASE_URL + '/forgot-password?email=' + em);
    }

    savechanges(message, passw) {
        return axios.put(message + '&password=' + passw);

    }

    logoutAdmin() {
        sessionStorage.removeItem("admin");
        sessionStorage.removeItem("role");
    }

    UpdateStatus(loginid, status) {
        return axios.get(USER_LOGIN_BASE_URL + '/updateStatus?loginid=' + loginid + '&status=' + status);
    }
}

export default new LoginAPI();
