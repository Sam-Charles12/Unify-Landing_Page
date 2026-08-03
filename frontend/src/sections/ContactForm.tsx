import { useState, type ChangeEvent, type FormEvent } from "react";

type StatusState = {
  type: "success" | "error" | null;
  message: string;
};

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  topic: "Student support",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusState>({ type: null, message: "" });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        topic: formData.topic,
        message: formData.message,
      };

      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your message right now.");
      }

      setStatus({
        type: "success",
        message: data?.message || "Your message has been sent successfully. We will get back to you soon.",
      });
      setFormData(initialFormState);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="panel-soft rounded-3xl p-7 md:p-10 relative overflow-hidden">
            <p className="section-kicker mb-4">Contact</p>
            <h2 className="font-display text-4xl lg:text-5xl font-700 leading-tight mb-5">
              Talk to the Unify team.
            </h2>
            <p className="text-brand-ink/65 text-base leading-relaxed max-w-md mb-8">
              Questions, partnerships, campus onboarding, or feedback. Send us a
              message and we will get back within 48 hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Student support",
                "Campus partnership",
                "Press and media",
                "General feedback",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex justify-center rounded-full px-4 py-2 text-xs font-semibold border border-brand-green/16 bg-white/72 text-brand-ink/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-7 md:p-10 bento-card">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-semibold text-brand-ink/70 mb-1.5 block">
                    First Name
                  </span>
                  <input
                    required
                    name="firstName"
                    type="text"
                    placeholder="Amina"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-brand-green/18 bg-white/85 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-brand-cobalt focus:shadow-[0_0_0_4px_rgba(31,107,255,0.13)]"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-brand-ink/70 mb-1.5 block">
                    Last Name
                  </span>
                  <input
                    required
                    name="lastName"
                    type="text"
                    placeholder="Okafor"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-brand-green/18 bg-white/85 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-brand-cobalt focus:shadow-[0_0_0_4px_rgba(31,107,255,0.13)]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-brand-ink/70 mb-1.5 block">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@university.edu"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-brand-green/18 bg-white/85 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-brand-cobalt focus:shadow-[0_0_0_4px_rgba(31,107,255,0.13)]"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-brand-ink/70 mb-1.5 block">
                  Topic
                </span>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-brand-green/18 bg-white/85 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-brand-cobalt focus:shadow-[0_0_0_4px_rgba(31,107,255,0.13)]"
                >
                  <option>Student support</option>
                  <option>University partnership</option>
                  <option>Career / team</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-brand-ink/70 mb-1.5 block">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us what you need..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-brand-green/18 bg-white/85 px-4 py-3 text-sm outline-none transition-all duration-300 resize-none focus:border-brand-cobalt focus:shadow-[0_0_0_4px_rgba(31,107,255,0.13)]"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-primary rounded-full px-7 py-3.5 font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p
                className={`text-sm transition-all duration-300 ${status.type === "success" ? "text-brand-green opacity-100" : status.type === "error" ? "text-red-600 opacity-100" : "text-brand-ink/45 opacity-70"}`}
              >
                {status.message || "We usually reply in less than 48 hours."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
