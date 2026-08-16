"use client";

import { useState, FormEvent } from "react";
import ContactView from "./ContactView";
import { ContactSection as ContactSectionType, PricePackage } from "../data/types/home-types";

interface ContactSectionProps {
  contactData: ContactSectionType;
  services: string[];
  packages: PricePackage[];
  locale: string;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

const initialForm: FormData = { name: "", company: "", email: "", message: "" };

export default function ContactSection({ contactData, services, packages, locale }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [interests, setInterests] = useState({ website: false, mobileApp: false, general: false });
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleInterest = (key: "website" | "mobileApp" | "general") => {
    setInterests((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const activeInterests = Object.entries(interests)
      .filter(([, v]) => v)
      .map(([k]) => k);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          locale,
          privacyAccepted,
          interests: activeInterests,
          selectedPackage,
          selectedServices,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitStatus("success");
        setSubmitMessage(locale === "de" ? "Danke! Ich melde mich bald bei dir." : "Thanks! I'll get back to you soon.");
        setFormData(initialForm);
        setInterests({ website: false, mobileApp: false, general: false });
        setSelectedPackage(null);
        setSelectedServices([]);
        setPrivacyAccepted(false);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(locale === "de" ? "Etwas ist schiefgelaufen. Bitte versuche es erneut." : "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(locale === "de" ? "Etwas ist schiefgelaufen. Bitte versuche es erneut." : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactView
      title={contactData.title}
      description={contactData.description}
      submitStatusType={submitStatus}
      submitStatusMessage={submitMessage}
      handleSubmit={handleSubmit}
      nameLabel={contactData.nameLabel}
      namePlaceholder={contactData.namePlaceholder}
      formDataName={formData.name}
      companyLabel={contactData.companyLabel}
      companyPlaceholder={contactData.companyPlaceholder}
      formDataCompany={formData.company}
      emailLabel={contactData.emailLabel}
      emailPlaceholder={contactData.emailPlaceholder}
      formDataEmail={formData.email}
      messageLabel={contactData.messageLabel}
      messagePlaceholder={contactData.messagePlaceholder}
      formDataMessage={formData.message}
      handleChange={handleChange}
      isSubmitting={isSubmitting}
      privacyAccepted={privacyAccepted}
      setPrivacyAccepted={setPrivacyAccepted}
      interests={interests}
      toggleInterest={toggleInterest}
      selectedPackage={selectedPackage}
      setSelectedPackage={setSelectedPackage}
      btn_text={contactData.btn_text}
      interestLabel={contactData.interestLabel}
      interestWebsite={contactData.interestWebsite}
      interestMobileApp={contactData.interestMobileApp}
      interestGeneral={contactData.interestGeneral}
      packageLabel={contactData.packageLabel}
      packages={packages}
      serviceLabel={contactData.serviceLabel}
      services={services}
      selectedServices={selectedServices}
      toggleService={toggleService}
      textPrivacyPolicy={locale === "de" ? "Ich akzeptiere die Datenschutzerklärung" : "I accept the privacy policy"}
      textSending={locale === "de" ? "Wird gesendet..." : "Sending..."}
    />
  );
}
