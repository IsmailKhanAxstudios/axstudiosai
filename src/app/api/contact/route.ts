import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const receiver = process.env.CONTACT_RECEIVER_EMAIL;
    if (!receiver) {
      console.error("CONTACT_RECEIVER_EMAIL is not set");
      return NextResponse.json(
        { success: false, message: "Server is not configured to accept messages" },
        { status: 500 },
      );
    }

    const body = await request.json();

    const {
      name,
      email,
      company,
      phone,
      website,
      business,
      automation,
      projectSize,
      timeline,
      interest,
    } = body;

    // ============================================================
    // 1. INTERNAL EMAIL — AX STUDIOS
    // ============================================================

    const { data: companyData, error: companyError } = await resend.emails.send(
      {
        from: "AX Studios <onboarding@resend.dev>",
        to: [receiver],
        subject: `New Lead — ${name}${company ? ` from ${company}` : ""}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #0a0a0a;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background-color: #0a0a0a; padding: 40px 20px;">

    <tr>
      <td align="center">

        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="
            max-width: 680px;
            background-color: #111111;
            border: 1px solid #272727;
            border-radius: 16px;
            overflow: hidden;
          ">

          <!-- HEADER -->
          <tr>
            <td style="
              padding: 32px;
              border-bottom: 1px solid #272727;
            ">

              <div style="
                font-size: 22px;
                font-weight: 700;
                color: #ffffff;
              ">
                AX Studios
              </div>

              <div style="
                margin-top: 8px;
                font-size: 13px;
                color: #999999;
                letter-spacing: 0.5px;
              ">
                NEW CONTACT FORM SUBMISSION
              </div>

            </td>
          </tr>


          <!-- MAIN -->
          <tr>
            <td style="padding: 32px;">

              <div style="
                display: inline-block;
                padding: 7px 12px;
                background-color: rgba(235, 106, 80, 0.12);
                border: 1px solid rgba(235, 106, 80, 0.3);
                border-radius: 999px;
                color: #eb6a50;
                font-size: 12px;
                font-weight: 600;
              ">
                NEW LEAD
              </div>

              <h1 style="
                margin: 20px 0 10px;
                font-size: 28px;
                line-height: 1.3;
                color: #ffffff;
              ">
                ${name} submitted a request
              </h1>

              <p style="
                margin: 0 0 30px;
                font-size: 15px;
                line-height: 1.7;
                color: #999999;
              ">
                A new potential client has submitted the contact form
                on the AX Studios website.
              </p>


              <!-- CONTACT DETAILS -->

              <h2 style="
                margin: 0 0 14px;
                font-size: 16px;
                color: #ffffff;
              ">
                Contact Details
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0"
                style="
                  background-color: #181818;
                  border: 1px solid #272727;
                  border-radius: 12px;
                  margin-bottom: 30px;
                ">

                <tr>
                  <td style="padding: 16px; width: 35%; color: #777777; font-size: 13px;">
                    Name
                  </td>
                  <td style="padding: 16px; color: #ffffff; font-size: 14px;">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 16px; color: #777777; font-size: 13px;">
                    Email
                  </td>
                  <td style="padding: 16px; color: #ffffff; font-size: 14px;">
                    <a href="mailto:${email}"
                      style="color: #eb6a50; text-decoration: none;">
                      ${email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 16px; color: #777777; font-size: 13px;">
                    Company
                  </td>
                  <td style="padding: 16px; color: #ffffff; font-size: 14px;">
                    ${company || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 16px; color: #777777; font-size: 13px;">
                    Phone
                  </td>
                  <td style="padding: 16px; color: #ffffff; font-size: 14px;">
                    ${phone || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 16px; color: #777777; font-size: 13px;">
                    Website
                  </td>
                  <td style="padding: 16px; color: #ffffff; font-size: 14px;">
                    ${
                      website
                        ? `<a href="${website}" style="color: #eb6a50; text-decoration: none;">${website}</a>`
                        : "Not provided"
                    }
                  </td>
                </tr>

              </table>


              <!-- PROJECT DETAILS -->

              <h2 style="
                margin: 0 0 14px;
                font-size: 16px;
                color: #ffffff;
              ">
                Project Details
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0"
                style="
                  background-color: #181818;
                  border: 1px solid #272727;
                  border-radius: 12px;
                  margin-bottom: 30px;
                ">

                <tr>
                  <td style="padding: 16px; width: 35%; color: #777777; font-size: 13px;">
                    Interested In
                  </td>
                  <td style="padding: 16px; color: #ffffff; font-size: 14px;">
                    ${interest || "Not specified"}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 16px; color: #777777; font-size: 13px;">
                    Project Size
                  </td>
                  <td style="padding: 16px; color: #ffffff; font-size: 14px;">
                    ${projectSize || "Not specified"}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 16px; color: #777777; font-size: 13px;">
                    Timeline
                  </td>
                  <td style="padding: 16px; color: #ffffff; font-size: 14px;">
                    ${timeline || "Not specified"}
                  </td>
                </tr>

              </table>


              <!-- BUSINESS -->

              <h2 style="
                margin: 0 0 14px;
                font-size: 16px;
                color: #ffffff;
              ">
                About Their Business
              </h2>

              <div style="
                padding: 18px;
                background-color: #181818;
                border: 1px solid #272727;
                border-radius: 12px;
                color: #cccccc;
                font-size: 14px;
                line-height: 1.7;
              ">
                ${business || "Not provided"}
              </div>

              <div style="height: 24px;"></div>


              <!-- AUTOMATION -->

              <h2 style="
                margin: 0 0 14px;
                font-size: 16px;
                color: #ffffff;
              ">
                What They Want To Automate
              </h2>

              <div style="
                padding: 18px;
                background-color: rgba(235, 106, 80, 0.06);
                border: 1px solid rgba(235, 106, 80, 0.2);
                border-radius: 12px;
                color: #dddddd;
                font-size: 14px;
                line-height: 1.7;
              ">
                ${automation || "Not provided"}
              </div>


              <!-- CTA -->

              <div style="
                margin-top: 32px;
                text-align: center;
              ">

                <a href="mailto:${email}"
                  style="
                    display: inline-block;
                    padding: 13px 24px;
                    background-color: #eb6a50;
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 8px;
                  ">
                  Reply to ${name}
                </a>

              </div>

            </td>
          </tr>


          <!-- FOOTER -->

          <tr>
            <td style="
              padding: 24px 32px;
              border-top: 1px solid #272727;
              text-align: center;
            ">

              <p style="
                margin: 0;
                font-size: 12px;
                color: #666666;
              ">
                AX Studios · AI Automation & Software
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>

  </table>

</body>
</html>
        `,
      },
    );

    if (companyError) {
      console.error("Company email error:", companyError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send company notification",
        },
        { status: 500 },
      );
    }

    // ============================================================
    // 2. CUSTOMER CONFIRMATION EMAIL
    // ============================================================

    const { data: userData, error: userError } = await resend.emails.send({
      from: "AX Studios <onboarding@resend.dev>",
      to: [email],
      subject: "We've received your request — AX Studios",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've received your request</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #0a0a0a;
  font-family: Arial, Helvetica, sans-serif;
">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background-color: #0a0a0a; padding: 40px 20px;">

    <tr>
      <td align="center">

        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="
            max-width: 600px;
            background-color: #111111;
            border: 1px solid #272727;
            border-radius: 16px;
            overflow: hidden;
          ">

          <!-- HEADER -->

          <tr>
            <td style="
              padding: 30px;
              text-align: center;
              border-bottom: 1px solid #272727;
            ">

              <div style="
                font-size: 22px;
                font-weight: 700;
                color: #ffffff;
              ">
                AX Studios
              </div>

            </td>
          </tr>


          <!-- CONTENT -->

          <tr>
            <td style="padding: 40px 32px;">

              <div style="
                width: 54px;
                height: 54px;
                line-height: 54px;
                margin: 0 auto 24px;
                text-align: center;
                background-color: rgba(235, 106, 80, 0.12);
                border: 1px solid rgba(235, 106, 80, 0.3);
                border-radius: 50%;
                color: #eb6a50;
                font-size: 24px;
              ">
                ✓
              </div>

              <h1 style="
                margin: 0 0 16px;
                text-align: center;
                font-size: 28px;
                line-height: 1.3;
                color: #ffffff;
              ">
                Thanks for reaching out, ${name}!
              </h1>

              <p style="
                margin: 0 0 24px;
                text-align: center;
                color: #999999;
                font-size: 15px;
                line-height: 1.7;
              ">
                We've received your request and appreciate you
                taking the time to contact AX Studios.
              </p>

              <p style="
                margin: 0 0 30px;
                text-align: center;
                color: #999999;
                font-size: 15px;
                line-height: 1.7;
              ">
                Our team will review your requirements and
                get back to you shortly.
              </p>


              <!-- SUMMARY -->

              <div style="
                padding: 20px;
                background-color: #181818;
                border: 1px solid #272727;
                border-radius: 12px;
              ">

                <p style="
                  margin: 0 0 14px;
                  font-size: 13px;
                  font-weight: 600;
                  color: #ffffff;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                ">
                  Request Summary
                </p>

                <p style="
                  margin: 8px 0;
                  font-size: 14px;
                  color: #999999;
                ">
                  <strong style="color: #ffffff;">Name:</strong>
                  ${name}
                </p>

                <p style="
                  margin: 8px 0;
                  font-size: 14px;
                  color: #999999;
                ">
                  <strong style="color: #ffffff;">Company:</strong>
                  ${company || "Not provided"}
                </p>

              </div>


              <p style="
                margin: 30px 0 0;
                text-align: center;
                color: #777777;
                font-size: 13px;
                line-height: 1.6;
              ">
                No further action is required from you.
                We'll be in touch as soon as possible.
              </p>

            </td>
          </tr>


          <!-- FOOTER -->

          <tr>
            <td style="
              padding: 24px 32px;
              text-align: center;
              border-top: 1px solid #272727;
            ">

              <p style="
                margin: 0 0 6px;
                color: #ffffff;
                font-size: 13px;
                font-weight: 600;
              ">
                AX Studios
              </p>

              <p style="
                margin: 0;
                color: #666666;
                font-size: 12px;
              ">
                AI Automation · AI Agents · AI Software
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>

  </table>

</body>
</html>
        `,
    });

    if (userError) {
      console.error("User confirmation email error:", userError);

      return NextResponse.json({
        success: true,
        message: "Form received, but confirmation email could not be sent",
        companyEmail: companyData,
      });
    }

    // ============================================================
    // SUCCESS
    // ============================================================

    return NextResponse.json({
      success: true,
      message: "Form submitted and both emails sent successfully",
      companyEmail: companyData,
      userEmail: userData,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
