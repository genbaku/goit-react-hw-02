export const Feedback = ( { feedbacks, totalFeedback, positivePercentage } ) => {
    return (
        <>
            <p>Good: {feedbacks.good}</p>
            <p>Neutral: {feedbacks.neutral}</p>
            <p>Bad: {feedbacks.bad}</p>
            <p>Total feedback: {totalFeedback}</p>
            <p>Positive percentage: {positivePercentage}%</p>
        </>
    );
};