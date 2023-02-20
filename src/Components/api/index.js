import axios from 'axios'

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://localhost:7246/api/Event/eventlist',
        'headers': {
            'content-type':'text/plain; charset=utf-8',
        },
    })
}