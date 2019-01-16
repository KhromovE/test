import { generateId } from '../lib/utils.js'
import { timestamp } from '../lib/date.js'
import { getComments, saveComments } from '../lib/store.js'

export class Main extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      username: '',
      message: '',
      comments: [],
    }

    this.sendComment = this.sendComment.bind(this)
    this.changeField = this.changeField.bind(this)
    this.removeComment = this.removeComment.bind(this)
  }

  componentDidMount() {
    this.setState({
      comments: getComments()
    })
  }

  sendComment(e) {
    const { username, message, comments } = this.state

    e.preventDefault()

    const preparedComments = [
      ...comments,
      {
        id: generateId(),
        username,
        message,
        timestamp: timestamp(),
      }
    ]

    saveComments(preparedComments)

    this.setState({
      comments: preparedComments,
      username: '',
      message: ''
    })
  }

  removeComment(id) {
    const { comments } = this.state
    const preparedComments = comments.filter(comment => comment.id !== id)

    this.setState({
      comments: preparedComments,
    })

    saveComments(preparedComments)
  }

  changeField(e) {
    const { name, value } = e.target 

    this.setState({ [name]: value })
  }

  render() {
    const { state, sendComment, changeField, removeComment } = this
    const { username, message, comments } = state

    return React.createElement(
      'main', 
      { className: 'main' },
    )
  }
}