import Form from '@/components/form'
import { Input } from 'antd'

const { Filed } = Form

export default function DiyForm() {
  return (
    <Form style={{ width: '300px' }}>
      <Filed name="username">
        <Input />
      </Filed>
      <Filed>
        <Input />
      </Filed>
      <Filed>
        <Input />
      </Filed>
    </Form>
  )
}