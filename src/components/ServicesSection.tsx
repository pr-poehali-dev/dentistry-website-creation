import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Scissors",
    title: "Стрижка и тримминг",
    description:
      "Профессиональная стрижка собак и кошек любых пород. Модельные и гигиенические стрижки",
    price: "от 1 500 ₽",
  },
  {
    icon: "Droplets",
    title: "Мытье и сушка",
    description:
      "Качественное мытье профессиональными шампунями, сушка и укладка шерсти",
    price: "от 800 ₽",
  },
  {
    icon: "Zap",
    title: "Уход за когтями",
    description: "Стрижка когтей, обработка подушечек лап, гигиенический уход",
    price: "от 500 ₽",
  },
  {
    icon: "Eye",
    title: "Чистка ушей и глаз",
    description:
      "Деликатная чистка ушей и глаз, удаление выделений, профилактика воспалений",
    price: "от 400 ₽",
  },
  {
    icon: "Sparkles",
    title: "СПА-процедуры",
    description: "Массаж, ароматерапия, маски для шерсти и кожи питомца",
    price: "от 1 200 ₽",
  },
  {
    icon: "Package",
    title: "Комплексный уход",
    description:
      "Полный груминг: стрижка, мытье, уход за когтями, ушами и глазами",
    price: "от 2 800 ₽",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр груминг-услуг для собак и кошек любых пород
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
