import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@material-ui/core'
import { ReactElement } from 'react'
import { Field, FieldRenderProps } from 'react-final-form'
import { useMessageSource } from 'src/i18n/useMessageSource'
import { FinalFormInput } from 'src/shared/components/form/control'
import { useRifm } from 'rifm'

type TextFieldType = 'password' | 'text' | 'email' | 'tel'

type TextFieldPropsToBeExcluded = FinalFormInput | 'variant'

type TextFieldProps = Omit<MuiTextFieldProps, TextFieldPropsToBeExcluded> & {
  validate?: any
  name: string
  type?: TextFieldType
  $withCheckbox?: boolean
}

const numberFormat = (str: string) => {
  const r = parseInt(str.replace(/[^\d]+/gi, ''), 10)
  return r ? r.toLocaleString('en') : ''
}

const Text = (props: FieldRenderProps<string, HTMLInputElement>): ReactElement => {
  const {
    input: { name, onChange, onFocus, onBlur, value, type = 'text' },
    meta,
    $withCheckbox,
    ...rest
  } = props

  const muiTextFieldProps = rest as MuiTextFieldProps
  const { helperText, ...restMuiTextFieldProps } = muiTextFieldProps

  const { touched, error: errorObject } = meta
  const { getMessage } = useMessageSource()
  const error = errorObject && getMessage(errorObject.errorKey, errorObject.params)
  const invalid = Boolean(touched && error)

  const localOnChange = (value: string) => {
    onChange(value)
  }

  const rifm = useRifm({
    value,
    onChange: localOnChange,
    format: numberFormat,
  })

  return (
    <MuiTextField
      {...(restMuiTextFieldProps as any)}
      fullWidth
      helperText={(invalid && error) || ' '}
      error={invalid}
      onChange={rifm.onChange}
      name={name}
      onFocus={onFocus}
      onBlur={onBlur}
      value={rifm.value}
      type={type}
      autoComplete="nope"
    />
  )
}
export const TextField = (props: TextFieldProps): ReactElement => (
  <Field<string, TextFieldProps & FieldRenderProps<string>, HTMLInputElement> component={Text} {...props} />
)
