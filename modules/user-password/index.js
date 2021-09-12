import Title from "../../components/Title";
import {useFormik} from "formik";
import {Form, Input, InputContainer, Label, SbmtContainer} from "../../styles/styles";
import {useContext} from "react";
import {FEEDBACK_TYPES, UiContext} from "../../context/ui-context";
import FeedbackText from "../../components/FeedbackText";

const UserPassword = () => {
  const { setUiState } = useContext(UiContext)

  const onSubmit = async (formData) => {
    const { password, confirmation } = formData
    const isAGoodPassword = password && password === confirmation

    //TODO: do this after send the info to the api
    if(isAGoodPassword) {
      setUiState({
        feedback: 'Nice, your user has been created',
        showFeedback: true,
        feedbackType: FEEDBACK_TYPES.GOOD
      })
    }
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      password: '',
      confirmation: '',
    },
    onSubmit,
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
        <SbmtContainer>
          <FeedbackText />
          <button type="submit">Enviar</button>
        </SbmtContainer>
      </Form>
    </>
  )
}

export default  UserPassword