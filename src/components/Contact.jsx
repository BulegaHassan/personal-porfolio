import { useState } from "react";
import contactImg from "../assets/message.svg";

const Contact = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
    service: "website",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };
  return (
    <section
      className='bg-emerald-100 py-24 dark:bg-slate-800 dark:text-white dark:border-x-8 dark:border-emerald-400'
      id='contact'
    >
      <h2 className='text-3xl text-slate-700 capitalize underline decoration-emerald-300 tracking-wide dark:decoration-dotted text-center font-bold dark:text-white'>
        Talk to me
      </h2>
      <div className=' mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8'>
        <article>
          <form onSubmit={submitEmail}>
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={mailerState.name}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={handleStateChange}
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={mailerState.email}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='name@email.com'
                onChange={handleStateChange}
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='countries'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Select your need
              </label>
              <select
                id='services'
                name='services'
                value={mailerState.service}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={handleStateChange}
              >
                <option value='website'>Website</option>
                <option value='database'>Database</option>
                <option value='api'> API</option>
                <option value='fullstackapp'>Full Stack App</option>
              </select>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your message
              </label>
              <textarea
                id='message'
                name='message'
                value={mailerState.message}
                rows='4'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='My message is...'
                onChange={handleStateChange}
              ></textarea>
            </div>
            <button
              type='submit'
              className='text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-500 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'
            >
              Submit
            </button>
          </form>
        </article>

        <article className='hidden md:block ml-28'>
          <img src={contactImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </section>
  );
};
export default Contact;
