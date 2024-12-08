import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { SignUpForm } from "./components/SignUpForm";

const App = () => {
  const [activeForm, setActiveForm] = useState<"login" | "signup">("login");

  const renderForm = () => {
    return activeForm === "login" ? <LoginForm /> : <SignUpForm />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Form Switcher */}
        <div className="flex justify-center space-x-4 mb-8">
          {["login", "signup"].map((form) => (
            <button
              key={form}
              onClick={() => setActiveForm(form as "login" | "signup")}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm ${
                activeForm === form
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-purple-600 hover:bg-purple-50 shadow-md"
              }`}
            >
              {form === "login" ? "Login" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* Active Form */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default App;
