import { useEffect } from "react";

export default function Botpress() {
  useEffect(() => {
    // Add the script
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
    script.async = true;
    script.onload = () => {
      window.botpress.init({
        botId: "d5d7a369-6c4d-432c-b181-48e0726d92d0",
        clientId: "8d1a76ed-117f-4d36-a869-e22ba7772e2f",
        selector: "#webchat",
        configuration: {
          version: "v1",
          botName: "Nexus",
          botAvatar:
            "https://files.bpcontent.cloud/2025/06/19/19/20250619191437-YPE9CKVM.png",
          color: "#316beb",
          variant: "soft",
          headerVariant: "glass",
          themeMode: "dark",
          fontFamily: "ibm",
          radius: 4,
          feedbackEnabled: false,
          footer: "", // Removes "⚡ by Botpress",
          description:
            "Nexus is a friendly and intelligent AI assistant embedded in Nitish Thorat’s portfolio. Acting as a guide and conversational gateway, Nexus helps visitors explore Nitish’s skills, projects, experience, and resume—offering a seamless, interactive way to connect with the developer behind the work.",
        },
      });

      window.botpress.on("webchat:ready", () => {
        window.botpress.open();
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="webchat"
      style={{
        width: "400px",
        height: "500px",
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
      }}
    />
  );
}
