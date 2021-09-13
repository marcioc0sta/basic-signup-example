import Title from "../../components/Title";
import {useFormik} from "formik";
import {Form, Input, InputContainer, Label, SbmtContainer} from "../../styles/styles";
import {useContext, useEffect} from "react";
import {FEEDBACK_TYPES, UiContext} from "../../context/ui-context";
import FeedbackText from "../../components/FeedbackText";
import {useDispatch, useSelector} from "react-redux";
import {sendUserToApi, USER_STATUSES} from "../../redux/userReducer";

const UserPassword = () => {
  const { setUiState } = useContext(UiContext)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const onSubmit = async (formData) => {
    const { password, confirmation } = formData
    const isAGoodPassword = password && password === confirmation

    if(!isAGoodPassword) {
      setUiState({
        feedback: 'Password invalid, the password needs to match the confirmation',
        showFeedback: true,
        feedbackType: FEEDBACK_TYPES.BAD
      })

      return
    }

    dispatch(sendUserToApi({
      ...user,
      password
    }))
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      password: '',
      confirmation: '',
    },
    onSubmit,
  })

  useEffect(() => {
    if(user.status === USER_STATUSES.FAILED) {
      setUiState({
        feedback: 'Server error, please try again later',
        showFeedback: true,
        feedbackType: FEEDBACK_TYPES.BAD
      })
    }

    if(user.status === USER_STATUSES.SUCCESS) {
      setUiState({
        feedback: 'Nice, your user has been created',
        showFeedback: true,
        feedbackType: FEEDBACK_TYPES.GOOD
      })
    }
  }, [user.status, setUiState])

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
          <button type="submit">Send</button>
        </SbmtContainer>
      </Form>
    </>
  )
}

export default  UserPassword