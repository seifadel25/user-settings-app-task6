"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function HomePage() {
  const t = useTranslations("SettingsPage");
  const menuItems = ["Main", "Email&Phone", "Password", "Taxes"];
  const [activeContent, setActiveContent] = useState("Main");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const renderContent = () => {
    switch (activeContent) {
      case "Main":
        return <MainContent />;
      case "Email&Phone":
        return <EmailPhoneContent />;
      case "Password":
        return <PasswordContent />;
      case "Taxes":
        return <TaxesContent />;
      default:
        return <MainContent />;
    }
  };
  const MainContent = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-4 ">
        {t("settings")}
      </h2>

      <form className="space-y-4 ">
        <div className="relative w-full">
          <input
            type="text"
            id="username"
            placeholder=""
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <label
            htmlFor="username"
            className="absolute ltr:left-4 rtl:right-4 top-3 text-gray-500 text-sm transition-all duration-300 transform 
               scale-100 opacity-100 
               peer-focus:opacity-100 peer-focus:scale-90 peer-focus:-translate-y-6 bg-white"
          >
            {t("username_placeholder")}
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="company_name"
            placeholder=""
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <label
            htmlFor="company_name"
            className="absolute ltr:left-4 rtl:right-4 top-3 text-gray-500 text-sm transition-all duration-300 transform 
               scale-100 opacity-100 
               peer-focus:opacity-100 peer-focus:scale-90 peer-focus:-translate-y-6 bg-white cursor-text"
          >
            {t("company_name")}
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="trade_license"
            placeholder=""
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <label
            htmlFor="trade_license"
            className="absolute ltr:left-4 rtl:right-4 top-3 text-gray-500 text-sm transition-all duration-300 transform 
               scale-100 opacity-100 
               peer-focus:opacity-100 peer-focus:scale-90 peer-focus:-translate-y-6 peer-focus:bg-white"
          >
            {t("trade_license")}
          </label>
        </div>

        <button
          type="submit"
          className="px-4 py-3 bg-violet-700 text-white rounded-full text-center hover:bg-violet-600"
        >
          {t("save_changes")}
        </button>
      </form>
    </div>
  );
  const EmailPhoneContent = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        {t("email&phone")}
      </h2>

      <form className="space-y-4">
        <div className="relative w-full">
          <input
            type="email"
            id="email"
            placeholder=""
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <label
            htmlFor="email"
            className="absolute ltr:left-4 rtl:right-4 top-3 text-gray-500 text-sm transition-all duration-300 transform 
               scale-100 opacity-100 
               peer-focus:opacity-100 peer-focus:scale-90 peer-focus:-translate-y-6 bg-white cursor-text"
          >
            {t("Email&Phone.email")}
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="tel"
            id="phone"
            placeholder=""
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <label
            htmlFor="phone"
            className="absolute ltr:left-4 rtl:right-4 top-3 text-gray-500 text-sm transition-all duration-300 transform 
               scale-100 opacity-100 
               peer-focus:opacity-100 peer-focus:scale-90 peer-focus:-translate-y-6 bg-white cursor-text"
          >
            {t("Email&Phone.phone")}
          </label>
        </div>

        <button
          type="submit"
          className="px-4 py-3 bg-violet-700 text-white rounded-full text-center hover:bg-violet-600"
        >
          {t("save_changes")}
        </button>
      </form>
    </div>
  );
  const PasswordContent = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-600 mb-4">
        {t("Password.title")}
      </h2>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Password changed successfully");
          setPassword("");
          setNewPassword("");
        }}
      >
        <div className="relative w-full">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="current_password"
            placeholder=""
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <label
            htmlFor="current_password"
            className="absolute ltr:left-4 rtl:right-4 top-3 text-gray-500 text-sm transition-all duration-300 transform 
               scale-100 opacity-100 
               peer-focus:opacity-100 peer-focus:scale-90 peer-focus:-translate-y-6 bg-white cursor-text"
          >
            {t("Password.current_password")}
          </label>
        </div>
        <div className="relative w-full">
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            id="new_password"
            placeholder=""
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <label
            htmlFor="new_password"
            className="absolute ltr:left-4 rtl:right-4 top-3 text-gray-500 text-sm transition-all duration-300 transform 
               scale-100 opacity-100 
               peer-focus:opacity-100 peer-focus:scale-90 peer-focus:-translate-y-6 bg-white cursor-text"
          >
            {t("Password.new_password")}
          </label>
        </div>

        <button
          type="submit"
          disabled={!password || !newPassword}
          className="disabled:bg-gray-300 disabled:text-gray-400 px-4 py-3 bg-violet-700 text-white rounded-full text-center hover:bg-violet-600"
        >
          {t("Password.password_submit")}
        </button>
      </form>
    </div>
  );
  const TaxesContent = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">{t("taxes")}</h2>

      <form className="space-y-4">
        <div className="relative w-full">
          <input
            type="text"
            value={""}
            onChange={(e) => e.target.value}
            id="vat"
            placeholder=""
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <label
            htmlFor="vat"
            className="absolute ltr:left-4 rtl:right-4 top-3 text-gray-500 text-sm transition-all duration-300 transform 
               scale-100 opacity-100 
               peer-focus:opacity-100 peer-focus:scale-90 peer-focus:-translate-y-6 peer-focus:bg-white"
          >
            {t("Taxes.vat")}
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="tax_id"
            placeholder=""
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <label
            htmlFor="tax_id"
            className="absolute ltr:left-4 rtl:right-4 top-3 text-gray-500 text-sm transition-all duration-300 transform 
               scale-100 opacity-100 
               peer-focus:opacity-100 peer-focus:scale-90 peer-focus:-translate-y-6 peer-focus:bg-white"
          >
            {t("Taxes.tax_id")}
          </label>
        </div>

        <button
          type="submit"
          className="px-4 py-3 bg-violet-700 text-white rounded-full text-center hover:bg-violet-600"
        >
          {t("save_changes")}
        </button>
      </form>
    </div>
  );

  return (
    <div className=" rounded-lg  max-w-2xl mx-auto ">
      {" "}
      <LocaleSwitcher />
      <div className="bg-gray-100 px-4 py-8 shadow-md my-10">
        <div className="flex gap-6 mb-6 text-nowrap flex-col md:flex-row">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`${
                activeContent === item
                  ? "bg-violet-700 text-white"
                  : "text-violet-700 bg-white"
              } px-4 py-2 rounded-2xl  border border-violet-700 `}
              onClick={() => setActiveContent(item)}
            >
              {t(`${item.toLowerCase()}`)}
            </button>
          ))}
        </div>{" "}
        {renderContent()}
      </div>{" "}
      {activeContent === "Main" && (
        <div className="bg-gray-100 px-4 py-4 shadow-md">
          <div className="">{PasswordContent()}</div>
        </div>
      )}
    </div>
  );
}
