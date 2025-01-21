import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
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
            <p className="mb-4">
              You have the right to receive care in a safe and respectful environment, as well as to make informed decisions about your healthcare.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to comprehensive reproductive healthcare services</li>
              <li>Right to make informed decisions about your care</li>
              <li>Confidential and private medical consultations</li>
              <li>Access to emergency medical services when needed</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Rights to Emergency Care</h2>
            <p className="mb-4">
              Under federal law, hospitals that receive Medicare funds must provide emergency medical treatment to anyone needing emergency care.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to receive emergency medical screening</li>
              <li>Stabilizing treatment for emergency medical conditions</li>
              <li>Transfer to other facilities when appropriate</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Civil Rights Complaints</h2>
            <p className="mb-4">
              If you believe your rights have been violated, you can file a complaint with the Office for Civil Rights.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-900">
                For more information or to file a complaint, contact your local civil rights office or visit the official website.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Additional Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Department of Justice Resources</li>
              <li>Healthcare Rights and Accessibility</li>
              <li>Patient Privacy Information</li>
              <li>Emergency Medical Treatment Guidelines</li>
            </ul>
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