/**
 * Email validation function
 */
export default function validateEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}
