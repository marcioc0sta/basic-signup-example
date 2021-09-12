import {useContext} from "react";
import {UiContext} from "../../context/ui-context";

import * as S from './styles'

const FeedbackText = () => {
  const { uiState } = useContext(UiContext)

  return uiState.showFeedback ? (
    <S.FeedbackText
      feedbackType={uiState.feedbackType}
    >
      {uiState.feedback}
    </S.FeedbackText>
  ) : null
}

export default FeedbackText