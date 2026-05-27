"use client";

import type { ReactNode } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#fbf4f1] text-[#231817] font-sans">
      {/* HERO */}
      <section
        className="relative h-125 flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/contact.png')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

<div className="relative z-10 max-w-[1180px] mx-auto px-6 w-full">

  <p className="contact-line text-[#c90016] uppercase tracking-[0.35em] text-[13px] font-bold mb-4">
    Get In Touch
  </p>

  <h1 className="contact-title text-white text-[42px] md:text-[48px] font-extrabold uppercase leading-tight mb-5">
    <span>Technical Support</span>
    <span>& Sales</span>
  </h1>

  <p className="contact-desc text-white/85 max-w-[720px] text-[17px] leading-8">
    <span>Expert assistance for your heavy lifting requirements.</span>
    <span>Reach out for maintenance schedules, equipment inquiries,</span>
    <span>or fleet management solutions.</span>
  </p>

</div>
      </section>

      {/* CONTACT BODY */}
      <section className="py-14">
        <div className="max-w-295 mx-auto px-6 grid grid-cols-1 lg:grid-cols-[430px_1fr] gap-8">
          {/* LEFT */}
          <div className="space-y-7">
            <div className="bg-white border-2 border-[#c90016] p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <h2 className="text-[24px] font-extrabold uppercase mb-6">
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

            <div className="bg-[#3b211d] text-white p-8 shadow-md hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-[24px] font-extrabold uppercase mb-5">
                Service Hours
              </h2>

              <HourRow label="Monday - Friday" time="08:00 - 19:00" />
              <HourRow label="Saturday" time="09:00 - 15:00" />
              <HourRow label="Emergency Recovery" time="24 / 7" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-[#e8cbc7] p-8 md:p-9 shadow-sm hover:shadow-xl transition-all duration-300">
            <h2 className="text-[24px] font-extrabold uppercase mb-8">
              Technical Inquiry Form
            </h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Full Name" placeholder="John Doe" />
                <Input label="Company Name" placeholder="Industrial Corp." />
                <Input label="Email Address" placeholder="email@company.com" />
                <Input label="Phone Number" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div>
                <Label>Inquiry Type</Label>
                <select className="field">
                  <option>Equipment Sales</option>
                  <option>Crane Service</option>
                  <option>Maintenance</option>
                  <option>Emergency Support</option>
                </select>
              </div>

              <div>
                <Label>Service Details / Machine Serial No.</Label>
                <textarea
                  rows={6}
                  placeholder="Please describe your requirements or provide the machinery model..."
                  className="field resize-none"
                />
              </div>

              <button
                type="submit"
                className="group bg-black text-white px-9 py-4 uppercase tracking-[0.18em] text-[13px] font-extrabold flex items-center gap-3 hover:bg-[#c90016] transition-all duration-300"
              >
                Submit Request
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
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
      <section className="bg-[#c90016] py-16">
        <div className="max-w-295 mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-white text-[34px] font-extrabold uppercase mb-3">
              Need Immediate Recovery?
            </h2>
            <p className="text-white/90 text-[16px] leading-7 max-w-162.5">
              Our emergency breakdown team is standing by to minimize your
              downtime. Call our 24/7 hotline for on-site support.
            </p>
          </div>

          <a
            href="tel:9712106675"
            className="bg-white text-[#c90016] px-10 py-5 uppercase tracking-[0.15em] text-[14px] font-extrabold hover:bg-black hover:text-white transition-all duration-300"
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
      <div className="text-[#c90016] mt-1 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="[&_h4]:font-bold [&_h4]:text-[16px] [&_h4]:mb-1 [&_p]:text-[15px] [&_p]:leading-7 [&_p]:text-[#5f5553]">
        {children}
      </div>
    </div>
  );
}

function HourRow({ label, time }: { label: string; time: string }) {
  return (
    <div className="flex justify-between border-b border-white/10 py-3 uppercase tracking-[0.12em] text-[13px] font-bold">
      <span className="text-white/75">{label}</span>
      <span>{time}</span>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <label className="block uppercase tracking-[0.18em] text-[13px] font-extrabold text-[#4a3a37] mb-2">
      {children}
    </label>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input placeholder={placeholder} className="field" />
    </div>
  );
}