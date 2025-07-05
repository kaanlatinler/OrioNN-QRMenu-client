"use client";
import React from "react";
import Header from "@/components/menu/shared/Header";
import Footer from "@/components/menu/shared/Footer";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <main className="main-content">
      <Header />
      <div className="container content-inner pb-0">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card">
              <div className="card-header">
                <h1 className="card-title text-center mb-0">Terms of Use</h1>
                <p className="text-muted text-center mb-0">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="card-body">
                <div className="terms-content">
                  <section className="mb-4">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                      By accessing and using the OrioNN QR Menu application and
                      related services ("Service"), you accept and agree to be
                      bound by the terms and provision of this agreement. If you
                      do not agree to abide by the above, please do not use this
                      service.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>2. Description of Service</h2>
                    <p>
                      OrioNN Development provides a QR Menu application that
                      allows restaurant owners to create, manage, and display
                      digital menus accessible via QR codes. Our service
                      includes:
                    </p>
                    <ul>
                      <li>Digital menu creation and management</li>
                      <li>QR code generation and customization</li>
                      <li>Menu analytics and insights</li>
                      <li>Customer ordering system</li>
                      <li>Restaurant management dashboard</li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>3. User Accounts and Registration</h2>
                    <h3>3.1 Account Creation</h3>
                    <p>
                      To access certain features of our Service, you must create
                      an account. You agree to:
                    </p>
                    <ul>
                      <li>
                        Provide accurate, current, and complete information
                      </li>
                      <li>Maintain and update your account information</li>
                      <li>Keep your account credentials secure</li>
                      <li>
                        Accept responsibility for all activities under your
                        account
                      </li>
                    </ul>

                    <h3>3.2 Account Security</h3>
                    <p>You are responsible for:</p>
                    <ul>
                      <li>Maintaining the confidentiality of your password</li>
                      <li>All activities that occur under your account</li>
                      <li>Notifying us immediately of any unauthorized use</li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>4. Acceptable Use Policy</h2>
                    <p>You agree not to use the Service to:</p>
                    <ul>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe upon the rights of others</li>
                      <li>
                        Upload or transmit harmful, offensive, or inappropriate
                        content
                      </li>
                      <li>
                        Attempt to gain unauthorized access to our systems
                      </li>
                      <li>Interfere with or disrupt the Service</li>
                      <li>
                        Use the Service for commercial purposes without proper
                        authorization
                      </li>
                      <li>Create multiple accounts for fraudulent purposes</li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>5. Content and Intellectual Property</h2>
                    <h3>5.1 Your Content</h3>
                    <p>
                      You retain ownership of content you upload to our Service.
                      By uploading content, you grant us a license to:
                    </p>
                    <ul>
                      <li>Host and display your content on our platform</li>
                      <li>Use your content to provide our services</li>
                      <li>
                        Make necessary modifications for technical compatibility
                      </li>
                    </ul>

                    <h3>5.2 Our Intellectual Property</h3>
                    <p>
                      The Service and its original content, features, and
                      functionality are owned by OrioNN Development and are
                      protected by international copyright, trademark, patent,
                      trade secret, and other intellectual property laws.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>6. Payment Terms</h2>
                    <h3>6.1 Subscription Plans</h3>
                    <p>
                      We offer various subscription plans for our services. By
                      subscribing, you agree to:
                    </p>
                    <ul>
                      <li>Pay all fees associated with your chosen plan</li>
                      <li>Provide accurate billing information</li>
                      <li>Authorize recurring payments</li>
                      <li>Pay applicable taxes</li>
                    </ul>

                    <h3>6.2 Payment Processing</h3>
                    <p>
                      Payments are processed through secure third-party payment
                      processors. We do not store your payment information on
                      our servers.
                    </p>

                    <h3>6.3 Refunds and Cancellations</h3>
                    <p>
                      Refund policies are subject to our discretion and
                      applicable laws. You may cancel your subscription at any
                      time through your account settings.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>7. Privacy and Data Protection</h2>
                    <p>
                      Your privacy is important to us. Our collection and use of
                      personal information is governed by our Privacy Policy,
                      which is incorporated into these Terms by reference.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>8. Service Availability</h2>
                    <p>
                      We strive to maintain high service availability but cannot
                      guarantee uninterrupted access. We may:
                    </p>
                    <ul>
                      <li>Perform maintenance and updates</li>
                      <li>Modify or discontinue features</li>
                      <li>Suspend service for security or technical reasons</li>
                    </ul>
                    <p>
                      We will provide reasonable notice for planned maintenance
                      and updates.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>9. Limitation of Liability</h2>
                    <p>
                      To the maximum extent permitted by law, OrioNN Development
                      shall not be liable for:
                    </p>
                    <ul>
                      <li>
                        Indirect, incidental, special, or consequential damages
                      </li>
                      <li>Loss of profits, data, or business opportunities</li>
                      <li>Damages resulting from third-party actions</li>
                      <li>Service interruptions or data loss</li>
                    </ul>
                    <p>
                      Our total liability shall not exceed the amount paid by
                      you for the Service in the 12 months preceding the claim.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>10. Indemnification</h2>
                    <p>
                      You agree to indemnify and hold harmless OrioNN
                      Development from any claims, damages, or expenses arising
                      from:
                    </p>
                    <ul>
                      <li>Your use of the Service</li>
                      <li>Your violation of these Terms</li>
                      <li>Your content or actions</li>
                      <li>Your violation of any third-party rights</li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>11. Termination</h2>
                    <h3>11.1 Termination by You</h3>
                    <p>
                      You may terminate your account at any time by contacting
                      us or using the account deletion feature.
                    </p>

                    <h3>11.2 Termination by Us</h3>
                    <p>We may terminate or suspend your account if:</p>
                    <ul>
                      <li>You violate these Terms</li>
                      <li>You engage in fraudulent or illegal activities</li>
                      <li>You fail to pay applicable fees</li>
                      <li>We discontinue the Service</li>
                    </ul>

                    <h3>11.3 Effect of Termination</h3>
                    <p>Upon termination:</p>
                    <ul>
                      <li>Your access to the Service will cease</li>
                      <li>We may delete your account and data</li>
                      <li>You remain liable for any outstanding fees</li>
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>12. Dispute Resolution</h2>
                    <p>
                      Any disputes arising from these Terms or the Service shall
                      be resolved through:
                    </p>
                    <ol>
                      <li>Good faith negotiations between parties</li>
                      <li>Mediation if negotiations fail</li>
                      <li>Binding arbitration as a last resort</li>
                    </ol>
                    <p>
                      These Terms are governed by the laws of [Your
                      Jurisdiction].
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>13. Changes to Terms</h2>
                    <p>
                      We reserve the right to modify these Terms at any time. We
                      will notify users of material changes by:
                    </p>
                    <ul>
                      <li>Posting updated Terms on our website</li>
                      <li>Sending email notifications</li>
                      <li>Displaying notices in our application</li>
                    </ul>
                    <p>
                      Your continued use of the Service after changes become
                      effective constitutes acceptance of the updated Terms.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>14. Severability</h2>
                    <p>
                      If any provision of these Terms is found to be
                      unenforceable or invalid, the remaining provisions will
                      continue in full force and effect.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2>15. Contact Information</h2>
                    <p>
                      If you have any questions about these Terms of Use, please
                      contact us:
                    </p>
                    <div className="contact-info">
                      <p>
                        <strong>OrioNN Development</strong>
                      </p>
                      <p>Email: legal@orionn.dev</p>
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
