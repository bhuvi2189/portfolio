
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handles form submission
  const onSubmit =  async(data) => {
    // console.log(data);
    try {
      // Replace with your Getform endpoint
      const response = await fetch('https://getform.io/f/aqoorvja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Required for Getform
        },
        body: new URLSearchParams(data), // Encode form data
      });

      if (response.ok) {
        alert('Message sent successfully!');
        reset(); // Clear the form after submission
      } else {
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <div id="contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p>Please fill out the form below to contact me</p>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold mb-4">Send Your Message</h2>

          {/* Full Name Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Full Name
            </label>
            <input
              {...register('name', { required: 'Full Name is required' })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name" // Ensure this matches your Getform field
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email Address Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email" // Ensure this matches your Getform field
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message" // Ensure this matches your Getform field
              placeholder="Write your message"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-150"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
