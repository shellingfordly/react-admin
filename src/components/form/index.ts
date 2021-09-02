import { FunctionComponent } from 'react'
import _Form from './Form'
import Filed from './Filed'
import useForm from "./useForm"

interface FormComponent<T = any> extends FunctionComponent<T> {
  Filed: FunctionComponent<T>
  useForm: Function
}

const Form: any = _Form

Form.Filed = Filed
Form.useForm = useForm

export default Form as FormComponent
