import Title from "../../components/Title";
import {useFormik} from "formik";
import {Form, Input, InputContainer, Label, SbmtContainer} from "../../styles/styles";
import { useContext } from "react";
import { UiContext } from "../../context/ui-context";
import axios from "axios";
import {useRouter} from "next/router";
import FeedbackText from "../../components/FeedbackText";

const UserInfo = () => {
  const { setUiState } = useContext(UiContext)
  const { push } = useRouter()

  const onSubmit = async (formData) => {
    const { data: users } = await axios.get('http://localhost:3001/users')
    const emailAlreadyExists = users.some(item => item.email === formData.email)

    if (emailAlreadyExists) {
      setUiState({
        feedback: 'Email already exists, please choose another one',
        showFeedback: true
      })
      return
    }

    console.log('update redux state')
    await push('/password', undefined, { shallow: true })
  }


  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: '',
      email: '',
      nickname: '@'
    },
    onSubmit,
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
        <SbmtContainer>
          <FeedbackText />
          <button type="submit">Salvar</button>
        </SbmtContainer>
      </Form>
    </>
  )
}

export default  UserInfo