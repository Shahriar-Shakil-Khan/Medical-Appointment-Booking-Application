import React from 'react';

const Contact = () => {
    return (
        <div>
            





<div className='border rounded-sm mt-6 mb-6'>
    <h1 class="text-3xl font-semibold text-center text-purple-700">Contact Us!</h1>
    

    <form >
      <div class="form-control">
        <label for="name" class="label">Name</label>
        <input type="text" id="name" name="name" class="input input-bordered w-full" placeholder="Enter your name" required />
      </div>


      <div class="form-control">
        <label for="telephone" class="label">Mobile Number</label>
        <input type="tel" id="telephone" name="telephone" class="input input-bordered w-full" placeholder="Please, enter your land or mobile phone" required />
      </div>

      <div class="form-control">
        <label for="email" class="label">Email</label>
        <input type="email" id="email" name="email" class="input input-bordered w-full" placeholder="Your email address" required />
      </div>

      <div class="form-control">
        <label for="message" class="label">Message</label>
        <textarea id="message" name="message" class="textarea textarea-bordered w-full" placeholder="Please, describe something" required></textarea>
      </div>

    </form>
    <button type="submit" class="btn btn-primary w-full mt-4">Send Message</button>
  </div>

        </div>
    );
};

export default Contact;