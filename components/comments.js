import { Comment } from './comment.js'

export const Comments = ({ comments, removeComment }) => React.createElement(
  'div',
  { 
    className: 'comments'
  },
  comments.length 
    ? comments.map((comment => React.createElement(Comment, { key: comment.id, removeComment, ...comment })))
    : 'there’s nothing here.'
)