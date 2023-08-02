import Image from 'next/image';
import React from 'react';

import { data } from '@/assets';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="container">
        <h2 className="mb-10 text-2xl font-bold text-white">Certificates</h2>
        <ul className="flex gap-4">
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
