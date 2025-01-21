import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Know Your Rights: Reproductive Health Care</h1>
          <div className="bg-blue-900 text-white p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-2">Updates on Medication Abortion</h2>
            <p className="text-sm">
              Important information regarding current regulations and access to medication abortion services.
              Please consult healthcare providers for the most up-to-date information.
            </p>
          </div>
        </header>

        <main className="space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Reproductive Rights</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="general-rights">
                <AccordionTrigger>General Rights</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>You have the right to receive care in a safe and respectful environment, as well as to make informed decisions about your healthcare.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access to comprehensive reproductive healthcare services</li>
                      <li>Right to make informed decisions about your care</li>
                      <li>Confidential and private medical consultations</li>
                      <li>Access to emergency medical services when needed</li>
                      <li>Right to receive care without discrimination</li>
                      <li>Right to accurate medical information</li>
                      <li>Right to refuse treatment</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="privacy-rights">
                <AccordionTrigger>Privacy Rights</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>Your medical information and care are protected by strict privacy laws:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Right to confidential communication with healthcare providers</li>
                      <li>Protection of medical records and personal health information</li>
                      <li>Control over who can access your medical information</li>
                      <li>Right to request corrections to your medical records</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="informed-consent">
                <AccordionTrigger>Informed Consent</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>Healthcare providers must obtain your informed consent before treatment:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Right to receive clear explanation of medical procedures</li>
                      <li>Information about risks and benefits of treatments</li>
                      <li>Alternative treatment options</li>
                      <li>Right to ask questions and receive answers</li>
                      <li>Right to change your mind about treatment</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Emergency Care Rights</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="emergency-services">
                <AccordionTrigger>Emergency Medical Services</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>Under federal law (EMTALA), hospitals that receive Medicare funds must provide emergency medical treatment to anyone needing emergency care:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Right to receive emergency medical screening</li>
                      <li>Stabilizing treatment for emergency medical conditions</li>
                      <li>Transfer to other facilities when appropriate</li>
                      <li>Treatment regardless of ability to pay</li>
                      <li>Protection from discrimination in emergency care</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hospital-obligations">
                <AccordionTrigger>Hospital Obligations</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>Hospitals have specific obligations under federal law:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Must provide medical screening examination</li>
                      <li>Cannot delay examination to inquire about payment</li>
                      <li>Must stabilize emergency medical conditions</li>
                      <li>Must provide appropriate transfer if necessary</li>
                      <li>Must accept appropriate transfers from other facilities</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Civil Rights Complaints</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="filing-complaints">
                <AccordionTrigger>How to File a Complaint</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>If you believe your rights have been violated, you can file a complaint with the Office for Civil Rights:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>File within 180 days of the alleged discrimination</li>
                      <li>Include detailed information about the incident</li>
                      <li>Provide contact information for follow-up</li>
                      <li>Submit supporting documentation if available</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-blue-900">
                        For more information or to file a complaint, contact your local civil rights office or visit the official website.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="protected-rights">
                <AccordionTrigger>Protected Rights</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>You are protected from discrimination based on:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Race, color, and national origin</li>
                      <li>Age</li>
                      <li>Disability</li>
                      <li>Sex and gender identity</li>
                      <li>Religion</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Additional Resources</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="legal-resources">
                <AccordionTrigger>Legal Resources</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Department of Justice Resources</li>
                    <li>Healthcare Rights and Accessibility Guidelines</li>
                    <li>Patient Privacy Information Portal</li>
                    <li>Emergency Medical Treatment Guidelines</li>
                    <li>Civil Rights Complaint Forms</li>
                    <li>Legal Aid Services Directory</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="healthcare-resources">
                <AccordionTrigger>Healthcare Resources</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Find a Healthcare Provider</li>
                    <li>Patient Advocacy Organizations</li>
                    <li>Mental Health Support Services</li>
                    <li>Insurance Information and Resources</li>
                    <li>Telehealth Services Directory</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </main>

        <footer className="mt-12 text-center text-sm text-gray-600">
          <p>This information is provided for general guidance. Consult healthcare providers for specific medical advice.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;