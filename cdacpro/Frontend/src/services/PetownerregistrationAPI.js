import axios from 'axios';

const USER_LOGIN_BASE_URL = 'http://localhost:5010';

class PetownerregistrationAPI {


    /*ownerreg(user) {
        return axios.post(USER_LOGIN_BASE_URL + '/ownerreg', user);
    }*/

    fetchAllOwnerPets(val) {
        return axios.get(USER_LOGIN_BASE_URL + '/getPets?cid=' + val);
    }

    deleteOwnedPet(pid) {
        return axios.get(USER_LOGIN_BASE_URL + '/deletebypid?pid=' + pid);
    }

    petreg(user) {
        return axios.post(USER_LOGIN_BASE_URL + '/savePet', user/*, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }*/);
    }

    updateOwnedPet(price, pid) {
        return axios.get(USER_LOGIN_BASE_URL + '/updatePet?price=' + price + '&pid=' + pid);
    }

    savebreed(breed) {
        return axios.post(USER_LOGIN_BASE_URL + '/savebreed', breed);
    }
}

export default new PetownerregistrationAPI();