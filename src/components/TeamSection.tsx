import Icon from "@/components/ui/icon";

const doctors = [
  {
    name: "Анна Петрова",
    specialty: "Главный врач, стоматолог-терапевт",
    experience: "15 лет опыта",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    achievements: [
      "Кандидат медицинских наук",
      "Член Российской стоматологической ассоциации",
    ],
  },
  {
    name: "Михаил Сидоров",
    specialty: "Хирург-имплантолог",
    experience: "12 лет опыта",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    achievements: [
      "Сертификат по имплантологии Straumann",
      "Более 1000 успешных имплантаций",
    ],
  },
  {
    name: "Елена Козлова",
    specialty: "Ортодонт",
    experience: "10 лет опыта",
    image:
      "https://images.unsplash.com/photo-1594824475574-7e77a77b2a8c?w=300&h=300&fit=crop&crop=face",
    achievements: [
      "Специалист по элайнерам Invisalign",
      "Сертификат по лингвальным брекетам",
    ],
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наша команда
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Опытные врачи с международными сертификатами и многолетней практикой
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Check" className="text-white" size={16} />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {doctor.name}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                {doctor.specialty}
              </p>
              <p className="text-gray-600 mb-4">{doctor.experience}</p>

              <div className="space-y-2">
                {doctor.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600"
                  >
                    <Icon name="Medal" size={14} className="text-blue-600" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
