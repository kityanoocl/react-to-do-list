import axios from 'axios'
class TodoAPI extends Component {
    static get() {
        const getTodoListURL = "https://5e9ec500fb467500166c4658.mockapi.io/todos"
        return axios.get(getTodoListURL)
    }
}

//[{"id":"1","content":"content 1","status":true},{"id":"2","content":"content 2","status":false},{"id":"3","content":"content 3","status":true},{"id":"4","content":"content 4","status":false},{"id":"5","content":"content 5","status":false},{"id":"7","content":"content 7","status":true},{"id":"8","content":"content 8","status":true},{"id":"9","content":"content 9","status":false}]


export default TodoAPI