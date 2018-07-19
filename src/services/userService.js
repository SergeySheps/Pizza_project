import {config} from '../config/config';


export const userService = {
    register,
    login,
    logout

};

function login(email,password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email,password}),
    };
    return fetch(`${config.apiUrl}/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
        // login successful if there's a jwt token in the response
        //if (user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
        //}
        return user;
    },
    (error)=>{
        return Promise.reject(error);
    }
);
}
function logout() {
    localStorage.removeItem("user");
}
function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
        credentials: 'same-origin'
    };
    console.log(`${config.apiUrl}/registration`);
    return fetch(`${config.apiUrl}/registration`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log(text, "text");
        const data = text && JSON.parse(text);
        console.log(data, "data");
        console.log(response, "response");
        if (!response.ok) {
            // if (response.status === 401) {
            //     // auto logout if 401 response returned from api
            //     logout();
            //     location.reload(true);
            // }
            console.log("response are not Ok");
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log("WTF");
        return data;
    },(error)=>{
        console.log(error)
    });
}