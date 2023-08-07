import { FC } from 'react';
import Image from 'next/image';

import { data } from '@/assets';

const Certificates: FC = () => {
  return (
    <section id="certificates" className="pt-10 desktop:pt-20">
      <div className="container">
        <h2 className="mb-10 text-2xl font-bold text-white">Certificates</h2>
        <ul className="flex gap-4 tablet:gap-8">
          {data.certificates.map(certificate => (
            <li key={certificate.alt}>
              <Image
                src={certificate.src}
                alt={certificate.alt}
                width={600}
                height={700}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
