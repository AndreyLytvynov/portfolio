import { FC } from 'react';

const Testimonials: FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-10 text-2xl font-bold text-white">Testimonials</h2>
        <ul className="flex flex-wrap gap-8">
          <li className="flex h-[320px] w-[592px] flex-col gap-4 rounded-lg bg-card p-5">
            <div className="flex items-center gap-5 text-base">
              <svg
                stroke="#ffe700"
                fill="#ffe700"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="60px"
                width="60px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M209 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1zM385 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z"></path>
              </svg>
              <p>Andrii Lytvynov</p>
              <span>|</span>
              <p>Web Developer in softrizen company</p>
            </div>
            <p className="line-clamp-6 text-justify text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et
              sint est molestias, debitis ipsa cum saepe architecto pariatur
              assumenda maiores non quisquam sequi a repellendus delectus ipsum,
              laborum provident animi aperiam iste. Atque, quis ut! Officia,
              tempore ipsum? Inventore, excepturi distinctio dicta fugit neque
              autem voluptate deleniti praesentium esse, cum incidunt quos odit
              assumenda tempora facere omnis delectus ut recusandae tempore!
              Quasi minima possimus quaerat, mollitia porro adipisci ab dolore.
              Nobis esse voluptate ex ad praesentium labore non repellendus odit
              similique iste, consequatur dolorem voluptates sapiente maxime
              ipsam dignissimos nostrum distinctio inventore quis molestias
              impedit adipisci quidem repellat?
            </p>
            <button
              type="button"
              className={`ml-auto block rounded border p-3 hover:border-card hover:bg-inherit hover:text-gray-100 hover:shadow-secondary focus:border-card focus:shadow-secondary`}
            >
              read more
            </button>
          </li>
          <li className="flex h-[320px] w-[592px] flex-col gap-4 rounded-lg bg-card p-5">
            <div className="flex items-center gap-5 text-base">
              <svg
                stroke="#ffe700"
                fill="#ffe700"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="60px"
                width="60px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M209 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1zM385 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z"></path>
              </svg>
              <p>Andrii Lytvynov</p>
              <span>|</span>
              <p>Web Developer in softrizen company</p>
            </div>
            <p className="line-clamp-6 text-justify text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et
              sint est molestias, debitis ipsa cum saepe architecto pariatur
              assumenda maiores non quisquam sequi a repellendus delectus ipsum,
              laborum provident animi aperiam iste. Atque, quis ut! Officia,
              tempore ipsum? Inventore, excepturi distinctio dicta fugit neque
              autem voluptate deleniti praesentium esse, cum incidunt quos odit
              assumenda tempora facere omnis delectus ut recusandae tempore!
              Quasi minima possimus quaerat, mollitia porro adipisci ab dolore.
              Nobis esse voluptate ex ad praesentium labore non repellendus odit
              similique iste, consequatur dolorem voluptates sapiente maxime
              ipsam dignissimos nostrum distinctio inventore quis molestias
              impedit adipisci quidem repellat?
            </p>
            <button
              type="button"
              className={`ml-auto block rounded border p-3 hover:border-card hover:bg-inherit hover:text-gray-100 hover:shadow-secondary focus:border-card focus:shadow-secondary`}
            >
              read more
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
