const AVAILABLE_TYPE = ['button', 'submit']

export const ButtonView = ({ type, onClick, children }) => {
  const preparedType = AVAILABLE_TYPE.includes(type) ? type : AVAILABLE_TYPE[0]

  return React.createElement('button', { type, onClick }, children)
}

export const Button = React.memo(ButtonView)