import axios from 'axios'

export const get10AnyEasyAny = () => {     //Number, Category, Difficulty, Type

    const apiUrl = 'https://opentdb.com/api.php?amount=10';
    return axios.get(apiUrl)

}
