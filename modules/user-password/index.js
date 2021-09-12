import Title from "../../components/Title";
import {useFormik} from "formik";
import {Form, Input, InputContainer, Label} from "../../styles/styles";

const UserPassword = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      password: '',
      confirmation: '',
    }
  })
  return (
    <>
      <Title text='User Password' />
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            name='password'
            id='password'
            value={values.password}
            onChange={handleChange}
            type="password"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Confirmation</Label>
          <Input
            name='confirmation'
            id='confirmation'
            value={values.confirmation}
            onChange={handleChange}
            type="password"
          />
        </InputContainer>
      </Form>
    </>
  )
}

export default  UserPassword