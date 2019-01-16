import { timeSlice } from '../lib/date.js'

export const CommentView = ({ id, username, message, timestamp, removeComment }) => React.createElement(
  'section', 
  { 
    className: 'comment'
  },
  React.createElement(
    'div',
    {
      className: 'comment-cross',
      onClick: () => removeComment(id),
    },
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'span',
      {
        className: 'comment-username'
      },
      `${username}: `
    ),
    React.createElement(
      'span',
      null,
      message
    )
  ),
  React.createElement(
    'div',
    {
      className: 'comment-date'
    },
    React.createElement(
      'small',
      null,
      timeSlice(timestamp)
    ),
  ),
)

export const Comment = React.memo(CommentView)