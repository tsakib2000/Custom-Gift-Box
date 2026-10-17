const MESSAGES: Record<string, string> = {
  "Invalid login credentials": "Incorrect email or password.",
  "Email not confirmed": "Please confirm your email address before signing in.",
  "User already registered": "An account with this email already exists.",
  "Password should be at least 6 characters": "Password must be at least 6 characters.",
  "Signup requires a valid password": "Please choose a stronger password.",
  "Unable to validate email address: invalid format": "Enter a valid email address.",
  "Email rate limit exceeded": "Too many attempts. Please try again later.",
};

export function authErrorMessage(error: unknown): string {
  if (!(error instanceof Error)) {
    return "Something went wrong. Please try again.";
  }

  const message = error.message ?? "";

  if (message in MESSAGES) return MESSAGES[message];
  if (message.includes("Failed to fetch")) {
    return "Could not reach the server. Check your connection and try again.";
  }

  return message || "Something went wrong. Please try again.";
}
