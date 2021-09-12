import styled from "styled-components";
import {FEEDBACK_TYPES} from "../../context/ui-context";

export const FeedbackText = styled.p`
  color: ${({ feedbackType }) => feedbackType === FEEDBACK_TYPES.BAD ? 'red' : 'green'};
  font-size: 13px;
  margin-right: 30%;
  width: 65%;
`