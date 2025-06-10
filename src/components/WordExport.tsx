import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const WordExport = () => {
  const exportToWord = () => {
    const content = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #2563eb; text-align: center; margin-bottom: 30px;">Стоматологическая клиника</h1>
        
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">О клинике</h2>
        <p><strong>Здоровая улыбка — ваша уверенность</strong></p>
        <p>Современная стоматология с индивидуальным подходом к каждому пациенту. Безболезненные процедуры и гарантия качества.</p>
        
        <h3>Наши достижения:</h3>
        <ul>
          <li>15+ лет опыта</li>
          <li>5000+ довольных пациентов</li>
          <li>100% гарантия качества</li>
          <li>Рейтинг клиники: 4.9/5</li>
        </ul>

        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 30px;">Наши услуги</h2>
        
        <h3>Терапевтическая стоматология - от 3 500 ₽</h3>
        <p>Лечение кариеса, пульпита, периодонтита с использованием современных материалов</p>
        
        <h3>Хирургическая стоматология - от 8 000 ₽</h3>
        <p>Удаление зубов, имплантация, костная пластика. Безболезненно и безопасно</p>
        
        <h3>Ортопедия - от 15 000 ₽</h3>
        <p>Протезирование зубов, коронки, мостовидные протезы, виниры</p>
        
        <h3>Ортодонтия - от 45 000 ₽</h3>
        <p>Исправление прикуса брекетами, элайнерами. Красивая улыбка для всех возрастов</p>
        
        <h3>Отбеливание зубов - от 12 000 ₽</h3>
        <p>Профессиональное отбеливание ZOOM, домашнее отбеливание</p>
        
        <h3>Профилактика - от 2 500 ₽</h3>
        <p>Профессиональная гигиена, фторирование, герметизация фиссур</p>

        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 30px;">Почему выбирают нас?</h2>
        <p>Мы создали клинику, где каждый пациент чувствует себя комфортно и уверенно. Наша миссия — сделать стоматологию доступной, безболезненной и эффективной.</p>
        
        <h3>Наши преимущества:</h3>
        <ul>
          <li><strong>Опытные врачи</strong> - Команда высококвалифицированных специалистов с опытом более 15 лет</li>
          <li><strong>Современное оборудование</strong> - Новейшие технологии диагностики и лечения для максимального комфорта</li>
          <li><strong>Удобное время</strong> - Работаем без выходных с 8:00 до 21:00 для вашего удобства</li>
          <li><strong>Доступные цены</strong> - Честные цены без скрытых доплат. Рассрочка и скидки постоянным клиентам</li>
        </ul>

        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 30px;">Наша команда</h2>
        <p>Опытные врачи с международными сертификатами и многолетней практикой</p>
        
        <h3>Анна Петрова</h3>
        <p><strong>Главный врач, стоматолог-терапевт</strong><br/>
        15 лет опыта<br/>
        • Кандидат медицинских наук<br/>
        • Член Российской стоматологической ассоциации</p>
        
        <h3>Михаил Сидоров</h3>
        <p><strong>Хирург-имплантолог</strong><br/>
        12 лет опыта<br/>
        • Сертификат по имплантологии Straumann<br/>
        • Более 1000 успешных имплантаций</p>
        
        <h3>Елена Козлова</h3>
        <p><strong>Ортодонт</strong><br/>
        10 лет опыта<br/>
        • Специалист по элайнерам Invisalign<br/>
        • Сертификат по лингвальным брекетам</p>

        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 30px;">Контактная информация</h2>
        
        <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 123, офис 45</p>
        <p><strong>Телефон:</strong><br/>
        +7 (495) 123-45-67<br/>
        +7 (909) 876-54-32</p>
        <p><strong>Email:</strong> info@dentist-clinic.ru</p>
        <p><strong>Режим работы:</strong><br/>
        Пн-Вс: 08:00 - 21:00<br/>
        Без выходных</p>
      </div>
    `;

    // Создаем Blob с HTML содержимым
    const converted = htmlDocx.asBlob(content);

    // Создаем ссылку для скачивания
    const link = document.createElement("a");
    link.href = URL.createObjectURL(converted);
    link.download = "stomatologiya-klinika.docx";
    link.click();

    // Очищаем URL
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={exportToWord}
        className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
        size="lg"
      >
        <Icon name="Download" className="mr-2" size={20} />
        Скачать Word
      </Button>
    </div>
  );
};

// Добавляем библиотеку html-docx-js глобально
declare global {
  interface Window {
    htmlDocx: any;
  }
}

// Загружаем библиотеку
const htmlDocx = {
  asBlob: (htmlString: string) => {
    const header = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Document</title></head>
      <body>${htmlString}</body></html>
    `;

    return new Blob(["\ufeff", header], {
      type: "application/msword",
    });
  },
};

export default WordExport;
