import { Comment } from './comment.js'

export const CommentsView = ({ comments, removeComment }) => React.createElement(
  'div',
  { 
    className: 'comments'
  },
  comments.length 
    ? comments.map((comment => React.createElement(Comment, { key: comment.id, removeComment, ...comment })))
    : 'There’s nothing here.'
)

export const Comments = React.memo(CommentsView)