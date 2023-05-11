/**
 * Phone Number validation function
 */
export default function validatePhone(phone: string) {
  return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
}
