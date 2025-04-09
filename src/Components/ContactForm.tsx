import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-md:w-full md:w-2xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg 
                   focus:ring-2 focus:ring-neutral-600 focus:border-transparent 
                   text-white placeholder-neutral-400"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg 
                   focus:ring-2 focus:ring-neutral-600 focus:border-transparent 
                   text-white placeholder-neutral-400"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg 
                   focus:ring-2 focus:ring-neutral-600 focus:border-transparent 
                   text-white placeholder-neutral-400 min-h-[150px]"
          placeholder="Your message..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 bg-neutral-700 hover:bg-neutral-600 
                 text-white rounded-lg transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
