/**
 * Maison Vereen — Email Templates
 * All templates use inline CSS only (email-client safe).
 * Design: charcoal background, gold (#C9A84C) accents, Cormorant Garamond serif (web-safe fallback: Georgia).
 */

// ── Shared brand tokens ────────────────────────────────────────────────────────
const T = {
  bg:          "#0A0A0A",
  bgCard:      "#0F0F0F",
  bgDark:      "#080808",
  gold:        "#C9A84C",
  goldDim:     "rgba(201,168,76,0.30)",
  cream:       "#E8E2D9",
  muted:       "#7A7068",
  mutedDark:   "#5A5449",
  dim:         "#3A3530",
  border:      "rgba(255,255,255,0.07)",
  borderGold:  "rgba(201,168,76,0.25)",
  fontSerif:   "Georgia, 'Times New Roman', serif",
  fontSans:    "'Helvetica Neue', Arial, sans-serif",
};

// ── Shell / outer wrapper ──────────────────────────────────────────────────────
function shell(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
  <title>Maison Vereen</title>
</head>
<body style="margin:0;padding:0;background-color:${T.bg};font-family:${T.fontSans};-webkit-font-smoothing:antialiased;">
  <!-- Email wrapper -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${T.bg};min-height:100vh;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Card -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background-color:${T.bgCard};border:1px solid ${T.border};">

          ${content}

          <!-- Footer -->
          <tr>
            <td style="padding:32px 48px;border-top:1px solid ${T.border};background-color:${T.bgDark};">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom:16px;">
                    <!-- Wordmark -->
                    <p style="margin:0;font-family:${T.fontSerif};font-size:10px;letter-spacing:0.45em;text-transform:uppercase;color:${T.mutedDark};font-weight:300;">MAISON VEREEN</p>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin:0;font-family:${T.fontSans};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${T.dim};">
                      A New Chapter in African Luxury
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:20px;">
                    <!-- Gold rule -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr><td width="24" height="1" style="background-color:${T.goldDim};font-size:0;line-height:0;">&nbsp;</td></tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:16px;">
                    <p style="margin:0;font-family:${T.fontSans};font-size:10px;letter-spacing:0.15em;color:${T.dim};">
                      © 2024 Maison Vereen. All Rights Reserved.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:8px;">
                    <p style="margin:0;font-family:${T.fontSans};font-size:10px;letter-spacing:0.12em;color:${T.dim};">
                      <a href="#" style="color:${T.dim};text-decoration:underline;">Privacy Policy</a>
                      &nbsp;·&nbsp;
                      <a href="#" style="color:${T.dim};text-decoration:underline;">Terms of Use</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Shared: header bar (gold rule + wordmark) ──────────────────────────────────
function header(): string {
  return `
  <!-- Header -->
  <tr>
    <td style="padding:36px 48px 28px;border-bottom:1px solid ${T.border};">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td>
            <!-- Gold accent bar -->
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr><td width="20" height="1" style="background-color:${T.gold};font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-top:14px;">
            <p style="margin:0;font-family:${T.fontSerif};font-size:11px;letter-spacing:0.45em;text-transform:uppercase;color:${T.cream};font-weight:300;line-height:1.4;">
              MAISON<br/>VEREEN
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

// ── Shared: section tag (gold uppercase label) ─────────────────────────────────
function sectionTag(text: string): string {
  return `<p style="margin:0 0 12px;font-family:${T.fontSans};font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:${T.gold};font-weight:500;">${text}</p>`;
}

// ── Shared: serif headline ─────────────────────────────────────────────────────
function headline(normal: string, gold: string): string {
  return `<p style="margin:0 0 20px;font-family:${T.fontSerif};font-size:28px;line-height:1.2;font-weight:300;color:${T.cream};">${normal} <span style="color:${T.gold};">${gold}</span></p>`;
}

// ── Shared: body paragraph ─────────────────────────────────────────────────────
function para(text: string, extraStyle = ""): string {
  return `<p style="margin:0 0 16px;font-family:${T.fontSans};font-size:13px;line-height:1.85;color:${T.muted};letter-spacing:0.02em;${extraStyle}">${text}</p>`;
}

// ── Shared: gold CTA button ────────────────────────────────────────────────────
function ctaButton(label: string, href: string): string {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
    <tr>
      <td style="border:1px solid rgba(201,168,76,0.50);">
        <a href="${href}" style="display:block;padding:14px 32px;font-family:${T.fontSans};font-size:10px;letter-spacing:0.28em;text-transform:uppercase;text-decoration:none;color:${T.cream};font-weight:500;">
          ${label}
        </a>
      </td>
    </tr>
  </table>`;
}

// ── Shared: thin gold divider ──────────────────────────────────────────────────
function divider(): string {
  return `
  <tr>
    <td style="padding:0 48px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr><td height="1" style="background-color:${T.border};font-size:0;line-height:0;">&nbsp;</td></tr>
      </table>
    </td>
  </tr>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 1 — Application Received (sent to applicant immediately on submit)
// ─────────────────────────────────────────────────────────────────────────────
export function applicationReceivedEmail(name: string): string {
  const firstName = name.split(" ")[0];

  const content = `
  ${header()}

  <!-- Hero banner — dark panel with gold edge -->
  <tr>
    <td style="background-color:#080808;padding:40px 48px;border-left:2px solid ${T.gold};">
      ${sectionTag("Application")}
      ${headline("Application", "Received.")}
      ${para(`Your name has been received by the House.`)}
    </td>
  </tr>

  <!-- Body -->
  <tr>
    <td style="padding:40px 48px;">
      ${para(`Dear ${firstName},`)}
      ${para(`We have received your application for <span style="color:${T.cream};letter-spacing:0.08em;">Maison Vereen Edition I</span>. The House reviews each submission with care — this is not a process we rush.`)}
      ${para(`You applied not for a product, but for a position within a founding chapter. That distinction is not lost on us.`)}
      ${para(`Our curatorial team will review your application and you will hear from us within <span style="color:${T.cream};">48 hours</span>.`)}

      <!-- Gold rule separator -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0;">
        <tr><td width="32" height="1" style="background-color:${T.gold};font-size:0;line-height:0;">&nbsp;</td></tr>
      </table>

      <!-- What to expect block -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${T.border};background-color:#0D0D0D;">
        <tr>
          <td style="padding:24px 28px;">
            <p style="margin:0 0 10px;font-family:${T.fontSans};font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:${T.mutedDark};font-weight:500;">What happens next</p>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid ${T.border};">
                  <p style="margin:0;font-family:${T.fontSans};font-size:11px;color:${T.muted};line-height:1.6;">
                    <span style="font-family:${T.fontSans};font-size:9px;color:${T.gold};letter-spacing:0.15em;margin-right:10px;">01</span>
                    Your responses are reviewed by our curatorial team.
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid ${T.border};">
                  <p style="margin:0;font-family:${T.fontSans};font-size:11px;color:${T.muted};line-height:1.6;">
                    <span style="font-family:${T.fontSans};font-size:9px;color:${T.gold};letter-spacing:0.15em;margin-right:10px;">02</span>
                    A decision is made within 48 hours of submission.
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <p style="margin:0;font-family:${T.fontSans};font-size:11px;color:${T.muted};line-height:1.6;">
                    <span style="font-family:${T.fontSans};font-size:9px;color:${T.gold};letter-spacing:0.15em;margin-right:10px;">03</span>
                    You will receive an email with the outcome either way.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      ${para(`We appreciate your patience, ${firstName}. A house built for permanence does not move without intention.`, "margin-top:28px;")}

      <p style="margin:0;font-family:${T.fontSerif};font-size:13px;line-height:1.7;color:${T.mutedDark};font-style:italic;">The House of Maison Vereen</p>
    </td>
  </tr>

  ${divider()}

  <!-- Edition I tag line -->
  <tr>
    <td style="padding:20px 48px;">
      <p style="margin:0;font-family:${T.fontSans};font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:${T.dim};">
        Edition I &nbsp;·&nbsp; 250 Bottles &nbsp;·&nbsp; The Founding Expression
      </p>
    </td>
  </tr>`;

  return shell(content);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 2 — Application Approved
// ─────────────────────────────────────────────────────────────────────────────
export function applicationApprovedEmail(name: string, bottleNumber?: number): string {
  const firstName = name.split(" ")[0];
  const bottleLine = bottleNumber
    ? `<p style="margin:0 0 4px;font-family:${T.fontSans};font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:${T.gold};">Your Bottle</p><p style="margin:0;font-family:${T.fontSerif};font-size:36px;color:${T.cream};font-weight:300;letter-spacing:0.1em;">#${String(bottleNumber).padStart(3, "0")}</p><p style="margin:4px 0 0;font-family:${T.fontSans};font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:${T.mutedDark};">of 250</p>`
    : "";

  const content = `
  ${header()}

  <!-- Hero — gold left border, approval feel -->
  <tr>
    <td style="background-color:#080808;padding:40px 48px;border-left:2px solid ${T.gold};">
      ${sectionTag("Access Granted")}
      ${headline("You have been", "recognised.")}
      ${para(`The House has reviewed your application and found what it was looking for.`)}
    </td>
  </tr>

  <!-- Body -->
  <tr>
    <td style="padding:40px 48px;">
      ${para(`Dear ${firstName},`)}
      ${para(`On behalf of Maison Vereen, we are pleased to confirm that your application for <span style="color:${T.cream};">Edition I</span> has been approved.`)}
      ${para(`You are not a customer. You are a founding member — one of <span style="color:${T.cream};">250 individuals</span> who carry the first chapter of this house. That is a permanent record.`)}

      ${bottleNumber ? `
      <!-- Bottle number block -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:28px 0;background-color:#0D0D0D;border:1px solid ${T.borderGold};">
        <tr>
          <td style="padding:28px;text-align:center;">
            ${bottleLine}
          </td>
        </tr>
      </table>
      ` : `
      <!-- Spacer -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:12px 0 28px;">
        <tr><td width="32" height="1" style="background-color:${T.gold};font-size:0;line-height:0;">&nbsp;</td></tr>
      </table>
      `}

      ${para(`The next step is completing your acquisition. Our team will reach out with the specifics of fulfilment.`)}
      ${para(`Welcome to the House.`)}
      <p style="margin:0;font-family:${T.fontSerif};font-size:13px;line-height:1.7;color:${T.mutedDark};font-style:italic;">The House of Maison Vereen</p>

      ${ctaButton("Visit the House", "https://maisonvereen.com")}
    </td>
  </tr>

  ${divider()}

  <tr>
    <td style="padding:20px 48px;">
      <p style="margin:0;font-family:${T.fontSans};font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:${T.dim};">
        Edition I &nbsp;·&nbsp; 250 Bottles &nbsp;·&nbsp; The Founding Expression
      </p>
    </td>
  </tr>`;

  return shell(content);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 3 — Application Declined (graceful, brand-aligned)
// ─────────────────────────────────────────────────────────────────────────────
export function applicationDeclinedEmail(name: string): string {
  const firstName = name.split(" ")[0];

  const content = `
  ${header()}

  <!-- Hero -->
  <tr>
    <td style="background-color:#080808;padding:40px 48px;border-left:2px solid ${T.border};">
      ${sectionTag("Application Update")}
      ${headline("Thank you for", "applying.")}
    </td>
  </tr>

  <!-- Body -->
  <tr>
    <td style="padding:40px 48px;">
      ${para(`Dear ${firstName},`)}
      ${para(`Thank you for taking the time to apply to Maison Vereen Edition I. Our curatorial team reviewed your submission with the same attention we give to all aspects of this house.`)}
      ${para(`At this time, we are unable to move forward with your application for Edition I.`)}
      ${para(`This decision is not a reflection of your character or your achievements. Edition I is a specific chapter — limited to <span style="color:${T.cream};">250 individuals</span> — and the alignment must be precise.`)}

      <!-- Gold rule -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0;">
        <tr><td width="32" height="1" style="background-color:${T.goldDim};font-size:0;line-height:0;">&nbsp;</td></tr>
      </table>

      ${para(`Maison Vereen will continue to grow. Future chapters will follow. We encourage you to remain connected to the House.`)}
      ${para(`We wish you continued distinction.`)}
      <p style="margin:0;font-family:${T.fontSerif};font-size:13px;line-height:1.7;color:${T.mutedDark};font-style:italic;">The House of Maison Vereen</p>
    </td>
  </tr>

  ${divider()}

  <tr>
    <td style="padding:20px 48px;">
      <p style="margin:0;font-family:${T.fontSans};font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:${T.dim};">
        Edition I &nbsp;·&nbsp; 250 Bottles &nbsp;·&nbsp; The Founding Expression
      </p>
    </td>
  </tr>`;

  return shell(content);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 4 — Admin Notification (sent to admins when a new form is submitted)
// ─────────────────────────────────────────────────────────────────────────────
export function adminNotificationEmail(app: {
  name: string;
  email: string;
  country: string;
  occupation: string;
  drives: string;
  legacy: string;
  howHeard: string;
}): string {
  const content = `
  ${header()}

  <!-- Hero — notification warning look, gray/border accent -->
  <tr>
    <td style="background-color:#080808;padding:40px 48px;border-left:2px solid ${T.gold};">
      ${sectionTag("Admin Notification")}
      ${headline("New Registry", "Submission")}
      ${para(`A new application has been submitted for Maison Vereen Edition I. Details are provided below for review.`)}
    </td>
  </tr>

  <!-- Body -->
  <tr>
    <td style="padding:40px 48px;">
      <!-- Table of details -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${T.border};background-color:#0D0D0D;margin-bottom:28px;">
        <tr>
          <td style="padding:20px 24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <!-- Name -->
              <tr>
                <td style="padding-bottom:12px;border-bottom:1px solid ${T.border};" valign="top">
                  <p style="margin:0 0 4px;font-family:${T.fontSans};font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:${T.gold};">Applicant Name</p>
                  <p style="margin:0;font-family:${T.fontSans};font-size:13px;color:${T.cream};font-weight:500;">${app.name}</p>
                </td>
              </tr>
              <!-- Email -->
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid ${T.border};" valign="top">
                  <p style="margin:0 0 4px;font-family:${T.fontSans};font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:${T.gold};">Email Address</p>
                  <p style="margin:0;font-family:${T.fontSans};font-size:13px;color:${T.cream};">${app.email}</p>
                </td>
              </tr>
              <!-- Location -->
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid ${T.border};" valign="top">
                  <p style="margin:0 0 4px;font-family:${T.fontSans};font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:${T.gold};">Location</p>
                  <p style="margin:0;font-family:${T.fontSans};font-size:13px;color:${T.cream};">${app.country}</p>
                </td>
              </tr>
              <!-- Occupation -->
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid ${T.border};" valign="top">
                  <p style="margin:0 0 4px;font-family:${T.fontSans};font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:${T.gold};">Occupation</p>
                  <p style="margin:0;font-family:${T.fontSans};font-size:13px;color:${T.cream};">${app.occupation}</p>
                </td>
              </tr>
              <!-- How Heard -->
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid ${T.border};" valign="top">
                  <p style="margin:0 0 4px;font-family:${T.fontSans};font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:${T.gold};">How Heard</p>
                  <p style="margin:0;font-family:${T.fontSans};font-size:13px;color:${T.cream};">${app.howHeard}</p>
                </td>
              </tr>
              <!-- Drives -->
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid ${T.border};" valign="top">
                  <p style="margin:0 0 4px;font-family:${T.fontSans};font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:${T.gold};">What Drives Them</p>
                  <p style="margin:0;font-family:${T.fontSans};font-size:13px;line-height:1.6;color:${T.cream};">${app.drives}</p>
                </td>
              </tr>
              <!-- Legacy -->
              <tr>
                <td style="padding-top:12px;" valign="top">
                  <p style="margin:0 0 4px;font-family:${T.fontSans};font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:${T.gold};">What Legacy Means</p>
                  <p style="margin:0;font-family:${T.fontSans};font-size:13px;line-height:1.6;color:${T.cream};">${app.legacy}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      ${ctaButton("Open Admin Dashboard", "https://maisonvereen.com/admin")}
    </td>
  </tr>

  ${divider()}

  <tr>
    <td style="padding:20px 48px;">
      <p style="margin:0;font-family:${T.fontSans};font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:${T.dim};">
        Maison Vereen Registry System &nbsp;·&nbsp; Confidential Notification
      </p>
    </td>
  </tr>`;

  return shell(content);
}
