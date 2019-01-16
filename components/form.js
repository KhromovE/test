import { Field } from './field.js'
import { Button } from './button.js'

export const FormView = ({ children, username, message, sendComment, changeField }) => {
  return React.createElement(
    'form',
    {
      className: 'form',
      onSubmit: sendComment
    },
    React.createElement(
      Field, 
      {
        value: username, 
        placeholder: 'Name', 
        name: 'username',
        onChange: changeField,
        required: true,
      }
    ),
    React.createElement(
      Field, 
      {
        type: 'textarea',
        value: message, 
        placeholder: 'Comment', 
        name: 'message', 
        onChange: changeField,
        required: true,
      }
    ),
    React.createElement(
      'div',
      {
        className: 'form-actions'
      },
      React.createElement(
        Button,
        {
          type: 'submit',
        },
        'Send'
      )
    )
  )
}

export const Form = React.memo(FormView)