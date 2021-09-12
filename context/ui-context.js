import {createContext, useState} from "react";

export const UiContext = createContext()

export const FEEDBACK_TYPES = {
  NEUTRAL: 'neutral',
  GOOD: 'good',
  BAD: 'bad'
}

const UiProvider = ({ children }) => {
  const [uiState, setUiState] = useState({
    feedback: '',
    showFeedback: false,
    feedbackType: FEEDBACK_TYPES.NEUTRAL
  })

  return  (
    <UiContext.Provider value={{ uiState, setUiState }}>
      {children}
    </UiContext.Provider>
  )
}

export default UiProvider