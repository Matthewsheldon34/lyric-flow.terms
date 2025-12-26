const privacyPolicyText = `
LyricFlow ("we", "our", "us") respects your privacy. We collect only the necessary
information such as email and username to provide a personalized lyric creation experience.
We do not sell, trade, or share your personal data with third parties. Your data is
stored securely and used solely to improve your experience with LyricFlow.
`;

const termsOfServiceText = `
By using LyricFlow, you agree to create, edit, and share lyrics responsibly. You retain
ownership of your content, but grant LyricFlow a license to display, store, and process
your lyrics for the purpose of providing services. Do not submit content that infringes
on copyrights or violates laws. LyricFlow is not liable for any misuse of the platform.
`;

function openLegalPage(title, text) {
  const newWindow = window.open("", "_blank", "width=700,height=800,scrollbars=yes");
  newWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
        <style>
          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 30px;
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 2rem;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
            animation: fadeSlideIn 0.8s ease forwards;
          }

          pre {
            white-space: pre-wrap;
            font-size: 1rem;
            line-height: 1.6;
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 12px;
            max-width: 800px;
            width: 100%;
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            overflow-x: auto;
            animation: fadeSlideIn 1s ease forwards;
            animation-delay: 0.3s;
            opacity: 0; /* start hidden, animation will fade in */
          }

          @media (max-width: 768px) {
            body {
              padding: 20px;
            }
            h1 {
              font-size: 1.6rem;
            }
            pre {
              font-size: 0.95rem;
              padding: 15px;
            }
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <pre>${text}</pre>
      </body>
    </html>
  `);
  newWindow.document.close();
}

document.getElementById("privacyPolicyBtn").addEventListener("click", () => {
  openLegalPage("Privacy Policy", privacyPolicyText);
});

document.getElementById("termsBtn").addEventListener("click", () => {
  openLegalPage("Terms of Service", termsOfServiceText);
});
