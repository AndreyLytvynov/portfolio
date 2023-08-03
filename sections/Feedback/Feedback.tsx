import FeedbackForm from '@/components/FeedbackForm/FeedbackForm';
import { FC } from 'react';

const Feedback: FC = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <FeedbackForm />
      </div>
    </section>
  );
};

export default Feedback;
