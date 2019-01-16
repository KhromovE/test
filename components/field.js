const AVAILABLE_TYPE = ['input', 'textarea']

export const FieldView = ({ type, value, name, placeholder, onChange, required, rows }) => {
  const preparedType = AVAILABLE_TYPE.includes(type) ? type : AVAILABLE_TYPE[0]

  return React.createElement(
    preparedType, { className: 'field', value, name, placeholder, onChange, required, rows }
  )
}

export const Field = React.memo(FieldView)