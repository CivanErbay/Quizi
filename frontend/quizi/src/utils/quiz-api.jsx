const axios = require('axios').default;

export const get10AnyEasyAny = () => {     //Number, Category, Difficulty, Type

    return axios.get('https://opentdb.com/api.php?amount=10&type=multiple').then(response => {
        return response
    })

}
