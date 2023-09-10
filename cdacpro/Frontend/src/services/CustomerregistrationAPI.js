import axios from 'axios';

const USER_LOGIN_BASE_URL = 'http://localhost:5010';

class CustomerregistrationAPI {

    custreg(user) {
        return axios.post(USER_LOGIN_BASE_URL + '/custreg', user);
    }

    cartdetails(val) {
        return axios.get(USER_LOGIN_BASE_URL + '/showall/' + val);
    }

    deletecartitems(va) {
        return axios.get(USER_LOGIN_BASE_URL + '/delete/' + va);
    }

    fetchAllCustomers() {
        return axios.get(USER_LOGIN_BASE_URL + '/allinfo');
    }

    fetchAllpettype() {
        return axios.get(USER_LOGIN_BASE_URL + '/typename');
    }

    fetchAllbreedtype(id) {
        return axios.get(USER_LOGIN_BASE_URL + '/showdata/' + id);
    }

    fetchAllpets(pid) {
        return axios.get(USER_LOGIN_BASE_URL + '/getbyid/' + pid);
    }

    addcartitems(pet) {
        return axios.post(USER_LOGIN_BASE_URL + '/savetr', pet);
    }

    deletecartdetails() {
        return axios.get(USER_LOGIN_BASE_URL + '/delete');
    }

    getallpets() {
        return axios.get(USER_LOGIN_BASE_URL + '/getallpets');
    }
}

export default new CustomerregistrationAPI();
