"use client";
import React from "react";
import Header from "@/components/menu/shared/Header";
import Footer from "@/components/menu/shared/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="main-content">
      <Header />
      <div className="container content-inner pb-0">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card">
              <div className="card-header">
                <h1 className="card-title text-center mb-0">Privacy Policy</h1>
                <p className="text-muted text-center mb-0">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="card-body">
                <div className="privacy-content">
                  <section className="mb-4">
                    <h2>1. Introduction</h2>
                    <p>
                      Welcome to OrioNN Development ("we," "our," or "us"). We
                      are committed to protecting your privacy and ensuring the
                      security of your personal information. This Privacy Policy
                      explains how we collect, use, disclose, and safeguard your
                      information when you use our QR Menu application and
                      related services.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>2. Information We Collect</h2>
                    <h3>2.1 Personal Information</h3>
                    <p>We may collect the following personal information:</p>
                    <ul>
                      <li>
                        Name and contact information (email address, phone
                        number)
                      </li>
                      <li>Account credentials and profile information</li>
                      <li>Business information for restaurant owners</li>
                      <li>
                        Payment information (processed securely through
                        third-party providers)
                      </li>
                    </ul>

                    <h3>2.2 Usage Information</h3>
                    <p>
                      We automatically collect certain information about your
                      use of our services:
                    </p>
                    <ul>
                      <li>
                        Device information (IP address, browser type, operating
                        system)
                      </li>
                      <li>
                        Usage patterns and interactions with our application
                      </li>
                      <li>
                        QR code scan analytics and menu viewing statistics
                      </li>
                      <li>Error logs and performance data</li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>3. How We Use Your Information</h2>
                    <p>
                      We use the collected information for the following
                      purposes:
                    </p>
                    <ul>
                      <li>Providing and maintaining our QR Menu services</li>
                      <li>Processing transactions and managing accounts</li>
                      <li>Improving our application and user experience</li>
                      <li>Sending important updates and notifications</li>
                      <li>Analyzing usage patterns to enhance our services</li>
                      <li>Ensuring security and preventing fraud</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>4. Information Sharing and Disclosure</h2>
                    <p>
                      We do not sell, trade, or rent your personal information
                      to third parties. We may share your information in the
                      following circumstances:
                    </p>
                    <ul>
                      <li>
                        <strong>Service Providers:</strong> With trusted
                        third-party service providers who assist us in operating
                        our application
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> When required by
                        law or to protect our rights and safety
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In connection with
                        a merger, acquisition, or sale of assets
                      </li>
                      <li>
                        <strong>Consent:</strong> With your explicit consent for
                        specific purposes
                      </li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>5. Data Security</h2>
                    <p>
                      We implement appropriate technical and organizational
                      measures to protect your personal information:
                    </p>
                    <ul>
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security assessments and updates</li>
                      <li>Access controls and authentication measures</li>
                      <li>Secure hosting and infrastructure</li>
                      <li>Employee training on data protection</li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>6. Your Rights and Choices</h2>
                    <p>
                      You have the following rights regarding your personal
                      information:
                    </p>
                    <ul>
                      <li>
                        <strong>Access:</strong> Request access to your personal
                        information
                      </li>
                      <li>
                        <strong>Correction:</strong> Request correction of
                        inaccurate information
                      </li>
                      <li>
                        <strong>Deletion:</strong> Request deletion of your
                        personal information
                      </li>
                      <li>
                        <strong>Portability:</strong> Request a copy of your
                        data in a portable format
                      </li>
                      <li>
                        <strong>Opt-out:</strong> Unsubscribe from marketing
                        communications
                      </li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>7. Cookies and Tracking Technologies</h2>
                    <p>
                      We use cookies and similar technologies to enhance your
                      experience:
                    </p>
                    <ul>
                      <li>
                        <strong>Essential Cookies:</strong> Required for basic
                        functionality
                      </li>
                      <li>
                        <strong>Analytics Cookies:</strong> Help us understand
                        usage patterns
                      </li>
                      <li>
                        <strong>Preference Cookies:</strong> Remember your
                        settings and preferences
                      </li>
                    </ul>
                    <p>
                      You can control cookie settings through your browser
                      preferences.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>8. Third-Party Services</h2>
                    <p>
                      Our application may integrate with third-party services:
                    </p>
                    <ul>
                      <li>Payment processors (Stripe, PayPal, etc.)</li>
                      <li>Analytics services (Google Analytics)</li>
                      <li>Cloud storage providers</li>
                      <li>Communication services</li>
                    </ul>
                    <p>
                      These services have their own privacy policies, and we
                      encourage you to review them.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>9. Data Retention</h2>
                    <p>
                      We retain your personal information for as long as
                      necessary to:
                    </p>
                    <ul>
                      <li>Provide our services</li>
                      <li>Comply with legal obligations</li>
                      <li>Resolve disputes</li>
                      <li>Enforce our agreements</li>
                    </ul>
                    <p>
                      When we no longer need your information, we will securely
                      delete or anonymize it.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>10. International Data Transfers</h2>
                    <p>
                      Your information may be transferred to and processed in
                      countries other than your own. We ensure appropriate
                      safeguards are in place to protect your data during
                      international transfers.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>11. Children's Privacy</h2>
                    <p>
                      Our services are not intended for children under 13 years
                      of age. We do not knowingly collect personal information
                      from children under 13. If you believe we have collected
                      such information, please contact us immediately.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>12. Changes to This Privacy Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. We
                      will notify you of any material changes by:
                    </p>
                    <ul>
                      <li>Posting the updated policy on our website</li>
                      <li>Sending email notifications to registered users</li>
                      <li>Displaying prominent notices in our application</li>
                    </ul>
                    <p>
                      Your continued use of our services after changes become
                      effective constitutes acceptance of the updated policy.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>13. Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy or our
                      data practices, please contact us:
                    </p>
                    <div className="contact-info">
                      <p>
                        <strong>OrioNN Development</strong>
                      </p>
                      <p>Email: privacy@orionn.dev</p>
                      <p>Address: [Your Business Address]</p>
                      <p>Phone: [Your Phone Number]</p>
                    </div>
                  </section>

                  <div className="text-center mt-5">
                    <Link href="/" className="btn btn-primary">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
