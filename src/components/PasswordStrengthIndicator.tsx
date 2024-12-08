import React from 'react';
import { calculatePasswordStrength } from '../utils/password-strength';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  const strength = calculatePasswordStrength(password);
  
  // Strength text and color mappings
  const strengthText = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'][strength];
  const strengthColor = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-lime-500',
    'bg-green-500',
  ][strength];

  return (
    <div className="mt-1">
      {/* Progress Bar */}
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <div
          className={`h-full rounded-full transition-all duration-300 ${strengthColor}`}
          style={{ width: `${(strength / 5) * 100}%` }}
          role="progressbar"
          aria-valuenow={strength}
          aria-valuemin={0}
          aria-valuemax={5}
        />
      </div>

      {/* Strength Text */}
      <p className="text-sm text-gray-600 mt-1">
        Password Strength: {strengthText}
      </p>
    </div>
  );
};
