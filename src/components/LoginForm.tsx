import { Formik, Form } from "formik";
import { LoginFormValues } from "../types/auth";
import { loginSchema } from "../utils/validation";
import { FormInput } from "./FormInput";
import { LogIn } from "lucide-react";

export const LoginForm = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const handleSubmit = (values: LoginFormValues, { setStatus }: any) => {
    console.log(values);
    setStatus({ success: "Login successful!" });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ status }) => (
        <Form className="space-y-4" noValidate>
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="p-2 bg-purple-100 rounded-full mb-3">
              <LogIn className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 text-xs mt-1">
              Sign in to your account
            </p>
          </div>

          {/* Form Inputs */}
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="h-3 w-3 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-xs text-gray-600"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-xs text-purple-600 hover:text-purple-500"
            >
              Forgot password?
            </a>
          </div>

          {/* Success Message */}
          {status?.success && (
            <div
              className="bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-xs"
              role="alert"
            >
              {status.success}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 text-sm font-medium"
          >
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};
