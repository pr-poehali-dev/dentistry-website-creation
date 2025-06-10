import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Sparkles",
    title: "Терапевтическая стоматология",
    description:
      "Лечение кариеса, пульпита, периодонтита с использованием современных материалов",
    price: "от 3 500 ₽",
  },
  {
    icon: "Zap",
    title: "Хирургическая стоматология",
    description:
      "Удаление зубов, имплантация, костная пластика. Безболезненно и безопасно",
    price: "от 8 000 ₽",
  },
  {
    icon: "Star",
    title: "Ортопедия",
    description: "Протезирование зубов, коронки, мостовидные протезы, виниры",
    price: "от 15 000 ₽",
  },
  {
    icon: "Heart",
    title: "Ортодонтия",
    description:
      "Исправление прикуса брекетами, элайнерами. Красивая улыбка для всех возрастов",
    price: "от 45 000 ₽",
  },
  {
    icon: "Sun",
    title: "Отбеливание зубов",
    description: "Профессиональное отбеливание ZOOM, домашнее отбеливание",
    price: "от 12 000 ₽",
  },
  {
    icon: "Shield",
    title: "Профилактика",
    description: "Профессиональная гигиена, фторирование, герметизация фиссур",
    price: "от 2 500 ₽",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр стоматологических услуг с использованием передового
            оборудования
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name={service.icon} className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-semibold text-lg">
                  {service.price}
                </span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Подробнее →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
