import Title from "../../components/Title";
import {useFormik} from "formik";
import {Form, Input, InputContainer, Label} from "../../styles/styles";

const UserInfo = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: '',
      email: '',
      nickname: '@'
    }
  })
  return (
    <>
      <Title text='User info' />
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="username">Username</Label>
          <Input
            name='username'
            id='username'
            value={values.username}
            onChange={handleChange}
            type="text"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
            type="email"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="nickname">Handle</Label>
          <Input
            name='nickname'
            id='nickname'
            value={values.nickname}
            onChange={handleChange}
            type="text"
          />
        </InputContainer>
      </Form>
    </>
  )
}

export default  UserInfo