import Airtable from "airtable";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useState } from "react";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const url =
  "https://reversefactor.us17.list-manage.com/subscribe/post?u=b57003070570714c6cf8427e6&id=1f80f88b81&f_id=00dd57e0f0";
// "https://gmail.us21.list-manage.com/subscribe/post?u=b0b454c659670778843556f67&amp;id=ef5db6416e&amp;f_id=008dc1e1f0";

const NewsletterForm = () => {
  return (
    <>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

const CustomForm = ({ status, message, onValidated }) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onValidated({
        EMAIL: formData.email,
      });

      const data = await base("Newsletter").create([
        {
          fields: {
            Email: formData.email,

            Source: location.href,
            Status: "Todo",
          },
        },
      ]);

      // console.log(formData.email);

      setFormData({
        email: "",
      });

      if (status === "error") {
        console.log(status);
      }

      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="validate dark-fields">
      <div>
        <div className="mc-field-group input-group form-floating">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="required email form-control"
            placeholder="Email Address"
            required
          />
          <label>Email Address</label>
          <input
            type="submit"
            value={loading ? "Joining" : "Join"}
            name="subscribe"
            className="btn btn-primary"
          />
        </div>
        <div id="mce-responses2" className="clear">
          <div className="response" id="mce-success-response2">
            {error && (
              <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                <p className="text-danger text-center h5">{error.message}</p>
              </div>
            )}
            {success && (
              <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                <p className="text-success text-center h5">
                  Thanks, you will receive updates from us.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </form>
  );
};

export default NewsletterForm;
