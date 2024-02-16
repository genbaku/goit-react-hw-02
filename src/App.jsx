import { Description } from "./components/description/Description"
import { Options } from "./components/options/Options"
import { Feedback } from "./components/feedback/Feedback"
import { Notification } from "./components/notification/Notification"
import { useState, useEffect } from "react"

export const App = () => {
  const [feedbackType, setFeedbackType] = useState(() => {
    const savedFeedback = localStorage.getItem('feedbackType');
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0
      };
    }
  });

  useEffect(() => {
    localStorage.setItem('feedbackType', JSON.stringify(feedbackType));
  }, [feedbackType]);

  const totalFeedback = feedbackType.good + feedbackType.neutral + feedbackType.bad;
  const positivePercentage = Math.round(((feedbackType.good + feedbackType.neutral) / totalFeedback) * 100);

  const updateFeedback = (type) => {
    const newFeedbackAmount = { ...feedbackType };
    newFeedbackAmount[type] += 1;
    setFeedbackType(newFeedbackAmount);
  };

  const resetFeedback = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <Feedback 
        feedbacks={feedbackType} 
        totalFeedback={totalFeedback}
        positivePercentage={positivePercentage}
        />
      )}
    </>
  )
}