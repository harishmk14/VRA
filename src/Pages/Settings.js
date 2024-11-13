// SettingsPage.js
import React, { useState } from "react";

const SettingsPage = () => {
  const [currentSection, setCurrentSection] = useState("Account");

  const sections = [
    { name: "Account Settings", id: "Account" },
    { name: "Notifications", id: "Notifications" },
    { name: "Privacy", id: "Privacy" },
    { name: "Payment Methods", id: "Payment" },
    { name: "Vehicle Preferences", id: "Vehicle" },
    { name: "Language Preferences", id: "Language" },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-gray-100 p-4 lg:h-screen">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                currentSection === section.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-blue-200"
              }`}
            >
              {section.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {currentSection === "Account" && <AccountSettings />}
        {currentSection === "Notifications" && <NotificationSettings />}
        {currentSection === "Privacy" && <PrivacySettings />}
        {currentSection === "Payment" && <PaymentSettings />}
        {currentSection === "Vehicle" && <VehiclePreferences />}
        {currentSection === "Language" && <LanguagePreferences />}
      </main>
    </div>
  );
};

// Example Settings Sections
const AccountSettings = () => (
  <section>
    <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
    <form className="space-y-4">
      <div>
        <label className="block text-gray-600">Name</label>
        <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
      </div>
      <div>
        <label className="block text-gray-600">Email</label>
        <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
      </div>
      <div>
        <label className="block text-gray-600">Change Password</label>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Change Password</button>
      </div>
    </form>
  </section>
);

const NotificationSettings = () => (
  <section>
    <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
    <div className="space-y-4">
      <div className="flex items-center">
        <label className="mr-2">Email Notifications</label>
        <input type="checkbox" className="toggle-checkbox" />
      </div>
      <div className="flex items-center">
        <label className="mr-2">SMS Notifications</label>
        <input type="checkbox" className="toggle-checkbox" />
      </div>
    </div>
  </section>
);

// Placeholder Components for Other Settings Sections
const PrivacySettings = () => <section><h3>Privacy Settings</h3></section>;
const PaymentSettings = () => <section><h3>Payment Methods</h3></section>;
const VehiclePreferences = () => <section><h3>Vehicle Preferences</h3></section>;
const LanguagePreferences = () => <section><h3>Language Preferences</h3></section>;

export default SettingsPage;
