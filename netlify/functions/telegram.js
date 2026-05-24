exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, contact, niche, budget } = JSON.parse(event.body);
    
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const text = `🔥 Нова заявка!\n\n👤 Ім'я: ${name}\n📞 Контакт: ${contact}\n💼 Ніша: ${niche}\n💰 Бюджет: ${budget}`;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    });

    if (!response.ok) {
      return { statusCode: response.status, body: "Telegram API Error" };
    }

    return { statusCode: 200, body: JSON.stringify({ message: "Success" }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Server Error" }) };
  }
};