import { Formik, Form } from "formik";
import { SignUpFormValues } from "../types/auth";
import { signUpSchema } from "../utils/validation";
import { FormInput } from "./FormInput";
import { PasswordStrengthIndicator } from "./PasswordStrengthIndicator";
import { UserPlus } from "lucide-react";

export const SignUpForm = () => {
  const initialValues: SignUpFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: SignUpFormValues, { setStatus }: any) => {
    console.log(values);
    setStatus({ success: "Sign up successful!" });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {({ values, status }) => (
        <Form className="space-y-4" noValidate>
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="p-2 bg-purple-100 rounded-full mb-3">
              <UserPlus className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-500 text-xs mt-1">
              Join our community today
            </p>
          </div>

          {/* Form  */}
          <FormInput label="Name" name="name" placeholder="Enter your name" />
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <div className="space-y-1">
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Create a password"
            />
            <PasswordStrengthIndicator password={values.password} />
          </div>
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />

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
            className="w-full py-2 px-4 border border-transparent rounded-lg shadow-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 text-sm font-medium"
          >
            Create Account
          </button>
        </Form>
      )}
    </Formik>
  );
};
