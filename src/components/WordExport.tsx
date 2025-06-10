import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const WordExport = () => {
  const exportToWord = () => {
    const content = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #2563eb; text-align: center; margin-bottom: 30px;">Груминг-салон для животных</h1>
        
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">О салоне</h2>
        <p><strong>Красота и здоровье ваших питомцев</strong></p>
        <p>Профессиональный груминг с любовью к каждому питомцу. Стрижки, мытье, уход за когтями в комфортной атмосфере.</p>
        
        <h3>Наши достижения:</h3>
        <ul>
          <li>8+ лет опыта</li>
          <li>2000+ довольных питомцев</li>
          <li>100% безопасность</li>
          <li>Рейтинг салона: 4.8/5</li>
        </ul>

        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 30px;">Наши услуги</h2>
        
        <h3>Стрижка и тримминг - от 1 500 ₽</h3>
        <p>Профессиональная стрижка собак и кошек любых пород. Модельные и гигиенические стрижки</p>
        
        <h3>Мытье и сушка - от 800 ₽</h3>
        <p>Качественное мытье профессиональными шампунями, сушка и укладка шерсти</p>
        
        <h3>Уход за когтями - от 500 ₽</h3>
        <p>Стрижка когтей, обработка подушечек лап, гигиенический уход</p>
        
        <h3>Чистка ушей и глаз - от 400 ₽</h3>
        <p>Деликатная чистка ушей и глаз, удаление выделений, профилактика воспалений</p>
        
        <h3>СПА-процедуры - от 1 200 ₽</h3>
        <p>Массаж, ароматерапия, маски для шерсти и кожи питомца</p>
        
        <h3>Комплексный уход - от 2 800 ₽</h3>
        <p>Полный груминг: стрижка, мытье, уход за когтями, ушами и глазами</p>

        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 30px;">Почему выбирают нас?</h2>
        <p>Мы создали груминг-салон, где каждый питомец чувствует себя комфортно и безопасно. Наша цель — сделать вашего любимца красивым и здоровым.</p>
        
        <h3>Наши преимущества:</h3>
        <ul>
          <li><strong>Опытные грумеры</strong> - Команда сертифицированных мастеров с опытом работы более 8 лет</li>
          <li><strong>Профессиональный инструмент</strong> - Используем только качественные инструменты и косметику для животных</li>
          <li><strong>Удобный график</strong> - Работаем ежедневно с 9:00 до 20:00, предварительная запись</li>
          <li><strong>Индивидуальный подход</strong> - Учитываем особенности каждого питомца, создаем комфортные условия</li>
        </ul>

        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 30px;">Наша команда</h2>
        <p>Профессиональные грумеры с сертификатами и многолетним опытом</p>
        
        <h3>Мария Иванова</h3>
        <p><strong>Главный грумер</strong><br/>
        8 лет опыта<br/>
        • Сертификат международной ассоциации грумеров<br/>
        • Специалист по породным стрижкам</p>
        
        <h3>Алексей Петров</h3>
        <p><strong>Мастер-грумер</strong><br/>
        6 лет опыта<br/>
        • Эксперт по работе с крупными породами<br/>
        • Более 1500 довольных клиентов</p>
        
        <h3>Анна Сидорова</h3>
        <p><strong>Грумер-стилист</strong><br/>
        5 лет опыта<br/>
        • Специалист по кошачьему грумингу<br/>
        • Мастер креативных стрижек</p>

        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 30px;">Контактная информация</h2>
        
        <p><strong>Адрес:</strong> г. Москва, ул. Зоологическая, д. 15, помещение 3</p>
        <p><strong>Телефон:</strong><br/>
        +7 (495) 123-45-67<br/>
        +7 (909) 876-54-32</p>
        <p><strong>Email:</strong> info@grooming-salon.ru</p>
        <p><strong>Режим работы:</strong><br/>
        Пн-Вс: 09:00 - 20:00<br/>
        Без выходных</p>
      </div>
    `;

    // Создаем Blob с HTML содержимым
    const converted = htmlDocx.asBlob(content);

    // Создаем ссылку для скачивания
    const link = document.createElement("a");
    link.href = URL.createObjectURL(converted);
    link.download = "grooming-salon.docx";
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
