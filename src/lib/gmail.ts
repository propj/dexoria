/**
 * Gmail API integration helper to send emails directly via Google OAuth credentials.
 */

interface SendEmailParams {
  to: string;
  from: string;
  subject: string;
  bodyText: string;
  accessToken: string;
}

/**
 * Encodes string to safe base64url format
 */
function base64urlEncode(str: string): string {
  // Handle multi-byte characters safely using UTF-8 encoding before converting to Base64
  const utf8Bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < utf8Bytes.length; i++) {
    binary += String.fromCharCode(utf8Bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/**
 * Sends an email using the Google Gmail API messages.send endpoint.
 */
export async function sendGmailEmail({
  to,
  from,
  subject,
  bodyText,
  accessToken,
}: SendEmailParams): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const mailLines = [
      `To: ${to}`,
      `From: ${from}`,
      `Subject: ${subject}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "",
      bodyText,
    ];
    const rawMessage = mailLines.join("\r\n");
    const encodedMessage = base64urlEncode(rawMessage);

    const response = await fetch("https://gmail.googleapis.com/v1/users/me/messages/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raw: encodedMessage,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Gmail API error: ${response.status} - ${errorBody}`);
    }

    const data = await response.json();
    return { success: true, id: data.id };
  } catch (err: any) {
    console.error("Failed to send email via Gmail API:", err);
    return { success: false, error: err.message || String(err) };
  }
}
