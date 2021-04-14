import React from 'react';

const ContactUs = () => (
  <>
    <h2 className="title is-2">Contact Form</h2>
    <form method="post" name="Contact Form" data-netlify="true">
      <div className="field">
        <label className="label" for="name">
          Name
        </label>
        <div className="control">
          <input className="input" type="text" name="name" id="name" placeholder="Name" />
        </div>
      </div>
      <div className="field">
        <label className="label" for="email">
          Email
        </label>
        <div className="control">
          <input className="input" type="email" name="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="field">
        <label className="label" for="comments">
          Comments
        </label>
        <div className="control">
          <textarea className="textarea" name="comments" id="comments" placeholder="Comments"></textarea>
        </div>
      </div>
      <div className="field mt-4">
        <div className="control">
          <input className="button is-link" type="submit" />
        </div>
      </div>
    </form>
  </>
);

export default ContactUs;
