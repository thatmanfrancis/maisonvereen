type SendEmailParams = {
  toEmail: string;
  toName?: string;
  subject: string;
  htmlBody: string;
};

export async function SendZeptomail({
  toEmail,
  toName,
  subject,
  htmlBody,
}: SendEmailParams) {
  const response = await fetch("https://zeptomail.zoho.com/v1.1/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: process.env.ZEPTOMAIL_AUTH_KEY || "",
    },
    body: JSON.stringify({
      from: {
        address: process.env.ZEPTOMAIL_FROM_EMAIL,
      },
      to: [
        {
          email_address: {
            address: toEmail,
            name: toName,
          },
        },
      ],
      subject,
      htmlbody: htmlBody,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message ||
        `Zeptomail request failed with status ${response?.status}`,
    );
  }

  return data;
}
