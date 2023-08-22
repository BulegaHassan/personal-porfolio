import contactImg from "../assets/contactme.svg";

const Contact = () => {
  return (
    <section className='bg-emerald-100 py-24' id="contact">
      <h2 className='text-3xl text-slate-700 capitalize tracking-wide text-center font-bold'>
        Talk to me
      </h2>
      <div className=' mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8'>
        <article>
          <form>
            <div className='mb-6'>
              <label
                for='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your name
              </label>
              <input
                type='text'
                id='name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                for='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='name@email.com'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                for='countries'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Select your Preferance
              </label>
              <select
                id='countries'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option>Logo</option>
                <option>Poster</option>
                <option>T-shirts</option>
                <option>Banners</option>
              </select>
            </div>
            <div className='mb-6'>
              <label
                for='message'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your message
              </label>
              <textarea
                id='message'
                rows='4'
                class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='My message is...'
              ></textarea>
            </div>
            <button
              type='submit'
              className='text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Submit
            </button>
          </form>
        </article>

        <article className='hidden md:block '>
          <img src={contactImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </section>
  );
};
export default Contact;
