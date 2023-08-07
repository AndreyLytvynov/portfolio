import { FC } from 'react';

import Slider from '@/components/Slider/Slider';

import { getPost } from '@/service/service';

const Testimonials: FC = async () => {
  const response = await getPost();
  return (
    <section className="pt-10 desktop:pt-20" id="comments">
      <div className="container">
        <h2 className="mb-10 text-2xl font-bold text-white">Comments</h2>
        <Slider data={response.data} />
      </div>
    </section>
  );
};

export default Testimonials;
