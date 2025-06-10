import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Award",
    title: "Опытные врачи",
    description:
      "Команда высококвалифицированных специалистов с опытом более 15 лет",
  },
  {
    icon: "Microscope",
    title: "Современное оборудование",
    description:
      "Новейшие технологии диагностики и лечения для максимального комфорта",
  },
  {
    icon: "Clock",
    title: "Удобное время",
    description: "Работаем без выходных с 8:00 до 21:00 для вашего удобства",
  },
  {
    icon: "CreditCard",
    title: "Доступные цены",
    description:
      "Честные цены без скрытых доплат. Рассрочка и скидки постоянным клиентам",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мы создали клинику, где каждый пациент чувствует себя комфортно и
              уверенно. Наша миссия — сделать стоматологию доступной,
              безболезненной и эффективной.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={feature.icon}
                      className="text-blue-600"
                      size={20}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=500&fit=crop"
              alt="Современная стоматологическая клиника"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">4.9</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">Рейтинг клиники</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
