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
            <h2 className="text-xl font-semibold mb-2">Update on Medication Abortion</h2>
            <p className="text-sm">
              On June 13, the Supreme Court issued a unanimous decision holding that the plaintiffs in FDA v. Alliance for Hippocratic Medicine lacked standing to challenge FDA's actions. Mifepristone—which FDA approved as safe and effective more than 20 years ago—remains available under the conditions of use approved by FDA.
            </p>
            <p className="text-sm mt-4">
              The Biden-Harris Administration remains committed to protecting reproductive rights, ensuring women can make their own decisions about their own bodies, and preserving the FDA's authority to make science-based determinations about what medications are safe and effective. Read statements from President Joe Biden, Attorney General Merrick Garland, and Health and Human Services Secretary Xavier Becerra.
            </p>
          </div>
          <p className="text-gray-700">
            Reproductive health care, including access to birth control and safe and legal abortion care, is an essential part of your health and well-being. While Roe v. Wade was overturned, abortion remains legal in many states, and other reproductive health care services remain protected by law. The U.S. Department of Health and Human Services (HHS) is committed to providing you with accurate and up-to-date information about access to and coverage of reproductive health care and resources. Our goal is to make sure you have appropriate information and support.
          </p>
        </header>

        <main className="space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Reproductive Rights</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="coverage-rights">
                <AccordionTrigger>Coverage Rights</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Whether you get coverage through your employer, Medicaid, HealthCare.gov, or elsewhere in the private insurance market, most plans cover family planning counseling, birth control, and other preventive services at no additional cost to you. Federal law allows federally-funded health coverage (like Medicaid) to cover abortion in some situations, and some private health insurance plans also cover abortion care.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="birth-control">
                <AccordionTrigger>Birth Control Coverage</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">The Affordable Care Act requires most employer-based health plans and private health insurance plans to cover family planning counseling and to cover certain birth control methods with no out-of-pocket costs to you if you have a prescription. This includes, but is not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Hormonal methods, like birth control pills and vaginal rings</li>
                    <li>Implanted devices, like intrauterine devices (IUDs)</li>
                    <li>Emergency contraception, like Plan B® and ella®</li>
                    <li>Barrier methods, like diaphragms and sponges</li>
                    <li>Patient education and counseling</li>
                    <li>Sterilization procedures</li>
                    <li>Additional forms of contraceptives approved, granted, or cleared by the FDA</li>
                  </ul>
                  <p className="mt-4">Some birth control methods are available over-the-counter and without a prescription including:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Emergency contraception, like Plan B®</li>
                    <li>Condoms</li>
                    <li>Birth control pills, like Opill®</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="medication-access">
                <AccordionTrigger>Access to Medication</AccordionTrigger>
                <AccordionContent>
                  <p>
                    The law prohibits pharmacies that receive federal financial assistance from discriminating on the basis of race, color, national origin, sex, age, and disability in their health programs and activities. While pharmacies regularly dispense medications; make determinations regarding the suitability of a prescribed medication for a patient; and advise patients about medications and how to take them, pharmacies that receive federal financial assistance may not discriminate against pharmacy customers on the bases prohibited by statute when they do so.
                  </p>
                  <p className="mt-4">
                    HHS is committed to ensuring that people are able to access health care free from discrimination. If you believe that you or another person's civil rights have been violated, you can file a complaint with HHS.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="abortion-access">
                <AccordionTrigger>Access to Abortion</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    As a result of the Supreme Court's decision to overturn Roe v. Wade, access to abortion will depend on the state you live in even more than before.
                  </p>
                  <p className="mb-4">
                    Mifepristone, in a regimen with misoprostol, has been approved by the Food and Drug Administration (FDA) since 2000 for the termination of early pregnancy, and is safe and effective when used as directed. Mifepristone for medication abortion currently is available for dispensing by mail by certified prescribers or by certified pharmacies for prescriptions issued by certified prescribers, in addition to in-person dispensing in clinics, medical offices, and hospitals.
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold">If you are covered through Medicaid:</h4>
                    <p>
                      While federal Medicaid funds can only cover abortion in the circumstances of rape, incest or if the patient's life is in danger, there are over a dozen states that provide more comprehensive coverage for abortion using state Medicaid funds.
                    </p>
                    
                    <h4 className="font-semibold">If you are covered through your employer, a plan offered through the Affordable Care Act Marketplaces, or elsewhere in the private market:</h4>
                    <p>
                      Coverage will vary by state, employer, and insurance company. In some states, private health insurance plans (including employer coverage) are required or allowed to cover abortion in either all or certain circumstances. Review your plan benefits document to find out whether your plan covers abortion. If you are using a plan where you are not the primary policy holder (for example if you are on a parent's or spouse's plan), be mindful that the policy holder may receive documentation from the plan known as an "Explanation of Benefits" that includes information about your care.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Emergency Medical Care Rights</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="emergency-update">
                <AccordionTrigger>Update on Emergency Medical Care</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    On June 27, the Supreme Court issued its order in Moyle v. United States, reinstating the protections of the Emergency Medical Treatment and Labor Act (EMTALA) for pregnant women experiencing emergency medical conditions in Idaho. On July 2, the Department of Health and Human Services sent a letter reminding hospitals and provider associations that it is a hospital's legal duty to offer necessary stabilizing medical treatment, including abortion care (or transfer, if appropriate), to all patients in Medicare-participating hospitals who are found to have an emergency medical condition.
                  </p>
                  <p>
                    The Biden-Harris Administration remains committed to protecting reproductive rights and maintains our long-standing position that women have the right to access the emergency medical care they need.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="emtala-rights">
                <AccordionTrigger>EMTALA Rights</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The Emergency Medical Treatment and Labor Act (EMTALA) requires Medicare-participating hospital emergency departments to offer any person who requests it an appropriate medical screening examination within the capability of the hospital's emergency department.</li>
                    <li>If the hospital determines that you have an emergency medical condition, federal law requires the hospital to offer you treatment until your emergency medical condition is stabilized, or an appropriate transfer to another hospital if you need it.</li>
                    <li>An emergency medical condition includes any medical condition manifesting itself by acute symptoms and that, in the absence of immediate medical attention, could reasonably be expected to place the person's health in serious jeopardy. Emergency medical conditions involving pregnant patients may include, but are not limited to, ectopic pregnancy, complications of a pregnancy loss, or emergent hypertensive disorders, such as preeclampsia with severe features.</li>
                    <li>These federal rights preempt any directly conflicting state laws or mandates that apply to specific procedures.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="healthcare-providers">
                <AccordionTrigger>For Healthcare Providers</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>EMTALA requires a hospital to provide stabilizing medical treatment to any pregnant patients presenting to the hospital with an emergency medical condition, regardless of any directly conflicting restrictions in the state where you practice.</li>
                    <li>Physicians and other qualified medical personnel are required by federal law to offer stabilizing medical treatment (or an appropriate transfer) to a patient who presents to the emergency department and is found to have an emergency medical condition.</li>
                    <li>Stabilizing treatment could include medical and/or surgical interventions (such as abortion, removal of one or both fallopian tubes, anti-hypertensive therapy, or methotrexate therapy), irrespective of any directly conflicting state laws or mandates that apply to specific procedures.</li>
                    <li>Health care professionals and institutions with religious or conscience objections to providing abortions do not have to do so.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Patient Privacy and Civil Rights</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="patient-privacy">
                <AccordionTrigger>Patient Privacy</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Federal law prohibits health care providers, health insurance plans, and other entities subject to the HIPAA Privacy Rule from using or sharing your health information to investigate or impose liability on yourself or any person for the mere act of seeking, obtaining, providing, or facilitating lawful reproductive health care.
                  </p>
                  <p className="text-sm text-gray-600">
                    This prohibition goes into effect on June 25, 2024, and can be enforced beginning on December 23, 2024.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="civil-rights">
                <AccordionTrigger>Civil Rights Complaints</AccordionTrigger>
                <AccordionContent>
                  <p>
                    The U.S. Department of Health and Human Services' Office for Civil Rights (OCR) enforces federal civil rights laws that prohibit discrimination in health programs receiving federal financial assistance. If you believe that your or another person's civil rights or health information privacy rights have been violated, you can file a complaint with HHS.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="no-insurance">
                <AccordionTrigger>If You Do Not Have Health Insurance</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Go to HealthCare.gov and see if you qualify for insurance coverage and financial assistance to make coverage more affordable.</li>
                    <li>Title X Family Planning Clinics provide a broad range of family planning services and provide preventive health services that benefit reproductive health, such as STI and HIV testing, HIV counseling, and HPV vaccines.</li>
                    <li>Health centers are community-based organizations that deliver high-quality primary health care services, regardless of your ability to pay.</li>
                    <li>The Ryan White HIV/AIDS Program provides medical care, medications, and essential support services to people with HIV.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </main>

        <footer className="mt-12 text-center text-sm text-gray-600">
          <p className="mb-2">This information is provided for general guidance. For the most current information, please consult healthcare providers or visit official government websites.</p>
          <p>Last updated: 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;