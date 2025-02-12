export const Contact = () => {
  return (
    <section
      id="contact"
      className="m-auto p-2 max-w-6xl w-full sm:w-9/10 lg:w-4/5 my-12 h-auto"
    >
      <h1 className="heading text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight sm:leading-tight tracking-wider mt-6 lg:mt-16 mb-16">
        <span className="text-red-600">Feel Free</span> To Contact Me
      </h1>

      {/* Contact Info */}
      <div className="flex flex-col items-start m-auto my-8 md:w-4/5 lg:w-3/5">
        <p className="tracking-wider">
          <i className="fa-solid fa-phone px-4"></i> 9462850284
        </p>
        <p className="tracking-wider">
          <i className="fa-solid fa-envelope px-4"></i> dineshrinwa410@gmail.com
        </p>
      </div>

      {/* Contact Form */}
      <form className="border rounded-2xl m-auto px-6 py-6 lg:px-20 md:w-4/5 lg:w-3/5">
        <div className="border-b border-gray-300 pb-10">
          <h2 className="text-lg font-semibold text-gray-900 text-center tracking-widest">
            Enter Your Information
          </h2>
          <p className="mt-1 text-md text-gray-600 text-center tracking-widest">
            Use a permanent address where you can receive mail.
          </p>
          <p className="text-red-600 text-center">*Beta mode*</p>

          {/* Input Fields */}
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            {/* First Name */}
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-900 tracking-wider">
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Buttons */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold text-gray-900 focus:outline-none">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};
