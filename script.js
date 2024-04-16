let isEnglish = true;

function changeLanguage() {
  const message = document.getElementById('message');
  const button = document.getElementById('language-btn');
  const Description = document.getElementById('Description');

  if (isEnglish) {
    message.textContent = ' حان الوقت لاخذ راحة! ';
    Description.textContent = "مرحباً، قررت أخذ استراحة قصيرة من بعض  لأركز أكثر على التحضير لاختبار التحصيلي. قد أكون بعيداً لفترة طويلة, ولكن أعدكم بالعودة بعد ذلك ومشاركة جميع التحديثات معكم. شكرًا لدعمكم وتفهمكم، وأتمنى للجميع النجاح في دراستهم وحياتهم. ❤️"
    button.textContent = 'English';
    button.style.backgroundColor = 'red';
  } else {
    message.textContent = `it's Time to Take Break.`;
    Description.textContent = "Hello, I've decided to take a short break to focus more on preparing for the GAT test. I may be away for a long time, but I promise to come back afterwards Soon. Thank you for your support and understanding, and I wish everyone success in their studies and lives. ❤️";
    button.textContent = 'العربية';
    button.style.backgroundColor = 'green';
  }

  isEnglish = !isEnglish;
}
