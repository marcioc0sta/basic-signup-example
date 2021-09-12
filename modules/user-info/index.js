import Title from "../../components/Title";
import {useFormik} from "formik";
import {Form, Input, InputContainer, Label, SbmtContainer} from "../../styles/styles";
import { useContext } from "react";
import {FEEDBACK_TYPES, UiContext} from "../../context/ui-context";
import {useRouter} from "next/router";
import FeedbackText from "../../components/FeedbackText";
import {noDataHasBeenSent, userAlreadyExists} from "./verify-user";

const UserInfo = () => {
  const { setUiState } = useContext(UiContext)
  const { push } = useRouter()

  const onSubmit = async (formData) => {
    if (noDataHasBeenSent(formData)) {
      setUiState({
        feedback: 'Please, add at least Username and Email',
        showFeedback: true,
        feedbackType: FEEDBACK_TYPES.BAD
      })
      return
    }

    const emailAlreadyExists = await userAlreadyExists(formData.email)

    if (emailAlreadyExists) {
      setUiState({
        feedback: 'Email already exists, please choose another one',
        showFeedback: true,
        feedbackType: FEEDBACK_TYPES.BAD
      })
      return
    }

    //TODO: update redux state
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