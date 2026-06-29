"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import type { ReactNode } from "react";

export default function ContactPage() {
const [name, setName] = useState("");
const [companyName, setCompanyName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [inquiryType, setInquiryType] = useState("Equipment Sales");
const [detail, setDetail] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState<"success" | "error" | "">("");

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);
  setMessage("");

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbz6-MKBMOPEnjfknNVqtKWFzBfqYPEogxQD-2eO-wG6TS_HHug-aWeDzslQVmWSxmUm/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name,
          companyName,
          email,
          phone,
          inquiryType,
          detail,
        }),
      }
    );

    setMessage("✅ Your request has been submitted successfully.");
    setMessageType("success");

    setName("");
    setCompanyName("");
    setEmail("");
    setPhone("");
    setInquiryType("Equipment Sales");
    setDetail("");
      setTimeout(() => {
    setMessage("");
    setMessageType("");
  }, 5000);
  } catch (error) {
    console.error(error);

    setMessage("❌ Something went wrong. Please try again.");
    setMessageType("error");
      setTimeout(() => {
    setMessage("");
    setMessageType("");
  }, 5000);
  } finally {
    setLoading(false);
  }
};
  return (
    <main className="bg-[#fbf4f1] text-[#231817]">
      {/* HERO */}
      <section
        className="relative h-125 flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/explosion-proof-wire-rope-hoist03.webp')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/30" />

<div className="relative z-10 max-w-295 mx-auto px-6 w-full">
  <p className="text-[#c9121f] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.3em] mb-4 font-heading">Contact Us</p>

  <h1 className="contact-title text-white text-[34px] md:text-[48px] font-extrabold uppercase leading-tight mb-5 font-heading">
    <span>Technical Support</span>
    <span>& Sales</span>
  </h1>

  <p className="contact-desc text-white/85 text-[14px] sm:text-[16px] md:text-[18px] leading-6.5 sm:leading-7.5 max-w-160">
    <span>Expert assistance for your heavy lifting requirements.</span>
    <span>Reach out for maintenance schedules, equipment inquiries,</span>
    <span>or fleet management solutions.</span>
  </p>

</div>
      </section>

      {/* CONTACT BODY */}
      <section className="py-16">
        <div className="max-w-295 mx-auto px-6 grid grid-cols-1 lg:grid-cols-[430px_1fr] gap-8">
          {/* LEFT */}
          <div className="space-y-7">
            <div className="bg-white border-2 border-[#c9121f] p-8 shadow-sm rounded-xl hover:shadow-xl transition-all duration-300">
              <h2 className="text-[24px] font-extrabold uppercase mb-6 font-heading">
                Headquarters
              </h2>

              <div className="space-y-6">
                <InfoItem icon={<MapPin size={22} />}>
                  <h4>Ahmedabad Operations</h4>
                  <p>
                    SHED NO-55, SHANKHESHWAR IND. PARK, PHASE-1,
                    <br />
                    VATVA RAILWAY BRIDGE, VATVA G.I.D.C,
                    <br />
                    AHMEDABAD, GUJARAT - 382440.
                  </p>
                </InfoItem>

                <InfoItem icon={<Phone size={21} />}>
                  <h4>Direct Inquiry</h4>
                  <p>
                    +91 97121 06675
                    <br />
                    +91 83068 43731
                  </p>
                </InfoItem>

                <InfoItem icon={<Mail size={21} />}>
                  <h4>Email Support</h4>
                  <p>
                    sales@kbcsales.com
                    <br />
                    service@kbcsales.com
                  </p>
                </InfoItem>
              </div>
            </div>

            <div className="bg-[#1a0a09] text-white p-8 shadow-md rounded-xl hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-[24px] font-extrabold uppercase mb-5 font-heading">
                Service Hours
              </h2>

              <HourRow label="Monday - Friday" time="08:00 - 19:00" />
              <HourRow label="Saturday" time="09:00 - 15:00" />
              <HourRow label="Emergency Recovery" time="24 / 7" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-[#e0d0cd] p-8 md:p-10 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300">
            <h2 className="text-[24px] font-extrabold uppercase mb-8 font-heading">
              Technical Inquiry Form
            </h2>

          <form
  className="space-y-5"
  onSubmit={handleSubmit}
>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<Input
  label="Full Name"
  placeholder="John Doe"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
                <Input
                  label="Company Name"
                  placeholder="Industrial Corp."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <Input
                  label="Email Address"
                  placeholder="email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
<div>
  <Label>Phone Number</Label>
  <input
    type="tel"
    placeholder="+91 XXXXX XXXXX"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    autoComplete="off"
    className="field"
  />
</div>
</div>

              <div>
                <Label>Inquiry Type</Label>
                <select
                  className="field"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                >
                  <option>Equipment Sales</option>
                  <option>Crane Service</option>
                  <option>Maintenance</option>
                  <option>Emergency Support</option>
                </select>
              </div>

              <div>
                <Label>Service Details</Label>
<textarea
  rows={6}
  value={detail}
  onChange={(e) => setDetail(e.target.value)}
  placeholder="Please describe your requirements or provide the machinery model..."
  className="field resize-none"
/>
</div>
  {message && (
    <div
      className={`mb-4 rounded-lg px-4 py-3 text-sm font-medium ${
        messageType === "success"
          ? "bg-green-50 text-green-700 border border-green-200"
          : "bg-red-50 text-red-700 border border-red-200"
      }`}
    >
      {message}
    </div>
  )}
<button
  type="submit"
  disabled={loading}
  className="group bg-[#c9121f] text-white px-9 py-4 uppercase tracking-[0.18em] text-[13px] font-extrabold flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed rounded-md hover:bg-[#1a0a09] transition-all duration-300 font-heading"
>
  {loading ? (
    <>
      <Loader2 size={18} className="animate-spin" />
      Processing...
    </>
  ) : (
    <>
      Submit Request
      <Send
        size={18}
        className="group-hover:translate-x-1 transition-transform"
      />
    </>
  )}
</button>
            </form>
          </div>
        </div>
      </section>

      {/* FULL WIDTH MAP */}
      <section className="bg-white">
        <div className="w-full h-90 md:h-125">
          <iframe
            title="KBC Sales & Service Location"
            src="https://www.google.com/maps?q=Shankheshwar%20Industrial%20Park%20Phase%201%20Vatva%20GIDC%20Ahmedabad%20Gujarat%20382440&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* RED CTA */}
      <section className="bg-[#1a0a09] py-16">
        <div className="max-w-295 mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-white text-[34px] font-extrabold uppercase mb-3 font-heading">
              Need Immediate Recovery?
            </h2>
            <p className="text-white/80 text-[16px] leading-7 max-w-162.5">
              Our emergency breakdown team is standing by to minimize your
              downtime. Call our 24/7 hotline for on-site support.
            </p>
          </div>

          <a
            href="tel:9712106675"
            className="bg-white text-[#c9121f] px-10 py-5 uppercase tracking-[0.15em] text-[14px] font-extrabold rounded-md hover:bg-[#c9121f] hover:text-white transition-all duration-300 font-heading animate-pulse-glow"
          >
            Call Emergency: 97121 06675
          </a>
        </div>
      </section>
    </main>
  );
}

function InfoItem({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-5 group">
      <div className="text-[#c9121f] mt-1 group-hover:scale-110 transition-transform duration-300 shrink-0">
        {icon}
      </div>
      <div className="[&_h4]:font-bold [&_h4]:text-[16px] [&_h4]:mb-1 [&_h4]:font-heading [&_p]:text-[15px] [&_p]:leading-7 [&_p]:text-[#5f5553]">
        {children}
      </div>
    </div>
  );
}

function HourRow({ label, time }: { label: string; time: string }) {
  return (
    <div className="flex justify-between border-b border-white/10 py-3.5 uppercase tracking-[0.12em] text-[13px] font-bold font-heading">
      <span className="text-white/65">{label}</span>
      <span>{time}</span>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <label className="block uppercase tracking-[0.18em] text-[13px] font-extrabold text-[#4a3a37] mb-2 font-heading">
      {children}
    </label>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>

      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="field"
      />
    </div>
  );
}