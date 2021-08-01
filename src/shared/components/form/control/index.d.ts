export type FinalFormInput =
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'type'
  | 'value'
  | 'checked'
  | 'multiple'
  | 'defaultValue'
  | 'helperText'

export interface Option {
  label: string
  value: number | string
}
