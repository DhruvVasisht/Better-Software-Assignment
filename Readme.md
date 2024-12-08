# React Authentication Form

A modern, accessible, and type-safe authentication system built with React, TypeScript, Formik, and Tailwind CSS.

## Features
- 🔐 **Secure login and signup forms**
- 📝 **Form validation with Yup**
- 💪 **Password strength indicator**
- 🔄 **"Remember Me" functionality**
- ♿ **Fully accessible** (ARIA compliant)
- 🎨 **Clean, modern UI** with Tailwind CSS
- 📱 **Responsive design**
- 🏗️ **Built with TypeScript**
- 🧩 **Modular architecture**

## Getting Started

### Prerequisites
Ensure you have the following installed on your local machine:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Design Choices

### Architecture
- **Component Structure**: Components are organized by feature and responsibility, following the Single Responsibility Principle.
- **Type Safety**: Comprehensive TypeScript types for form values and component props ensure type safety throughout the application.
- **Form Management**: Formik handles form state and validation, providing a clean and maintainable solution for complex forms.

### UI/UX Decisions
- **Minimalist Design**: Clean, modern interface focusing on usability and accessibility.
- **Visual Feedback**: Immediate feedback for form validation and submission status.
- **Password Strength**: Real-time password strength indicator helps users create secure passwords.
- **Responsive Layout**: Adapts seamlessly to different screen sizes.

### Security Considerations
- **Client-side Validation**: Comprehensive validation rules using Yup schema validation.
- **Password Requirements**: Enforces strong password creation with specific criteria.
- **Remember Me**: Secure implementation using localStorage for email persistence.

### Accessibility
- **ARIA Labels**: Proper ARIA roles and labels for screen readers.
- **Keyboard Navigation**: Full keyboard support for form navigation.
- **Error Messages**: Clear error messages with proper ARIA attributes.
- **Color Contrast**: WCAG compliant color choices.

## Project Structure

```
src/
├── components/          # React components
├── types/              # TypeScript interfaces
├── utils/              # Utility functions
└── main.tsx            # Application entry point
```

## Assumptions & Limitations

### Assumptions
1. Users have modern browsers with JavaScript enabled
2. Local storage is available for "Remember Me" functionality
3. Backend API endpoints will be implemented separately

### Limitations
1. Client-side only validation (server-side validation needed in production)
2. Basic password strength indicators (could be enhanced)
3. No persistent session management
4. No actual authentication implementation (mock success messages)