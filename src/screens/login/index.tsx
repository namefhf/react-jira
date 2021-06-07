import { Form, Input, Button, Card } from 'antd'
const LoginScreen = () => {
  const handleSubmit = (values: { uername: string; password: string }) => {
    console.log(values)
  }
  return (
    <div
      className="login"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card style={{ width: 500 }}>
        <Form onFinish={handleSubmit}>
          <Form.Item
            label="Username"
            name={'username'}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input type="text" placeholder={'用户名'} id="username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name={'password'}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input type="password" placeholder={'密码'} id="password" />
          </Form.Item>
          <Button htmlType="submit" type="primary">
            登录
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default LoginScreen
