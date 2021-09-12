import {createContext, useState} from "react";

export const UiContext = createContext()

const UiProvider = ({ children }) => {
  const [uiState, setUiState] = useState({
    feedback: '',
    showFeedback: false
  })

  return  (
    <UiContext.Provider value={{ uiState, setUiState }}>
      {children}
    </UiContext.Provider>
  )
}

export default UiProvider