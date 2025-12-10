// composables/useContactForm.ts
import { ref } from "vue";

export function useContactForm() {
  const name = ref("");
  const email = ref("");
  const phone = ref("");
  const message = ref("");
  const submitting = ref(false);
  const success = ref(false);
  const error = ref("");

  const BOT_TOKEN = "8401229479:AAGjDjAvrgnkPugDWY4bbvBdV0sma22rXeo";
  const CHAT_ID = "-1003323517639";

  const handleSubmit = async () => {
    submitting.value = true;
    error.value = "";
    success.value = false;

    try {
      const text = `
🔔 *New Message*  
👤 *Name:* ${name.value}  
📧 *Email:* ${email.value}  
📱 *Phone:* ${phone.value}  
💬 *Message:* ${message.value}
      `.trim();

      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      });

      if (!res.ok) throw new Error("Telegramga jo‘natishda xatolik");

      success.value = true;
      name.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
    } catch (e: any) {
      error.value = e.message || "Xatolik yuz berdi";
    } finally {
      submitting.value = false;
    }
  };

  return {
    name,
    email,
    phone,
    message,
    submitting,
    success,
    error,
    handleSubmit,
  };
}
