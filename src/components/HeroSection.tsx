import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Здоровая улыбка —
              <span className="text-blue-600"> ваша уверенность</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Современная стоматология с индивидуальным подходом к каждому
              пациенту. Безболезненные процедуры и гарантия качества.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на прием
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Консультация
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-gray-600">довольных пациентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">гарантия качества</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop"
              alt="Стоматологический кабинет"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Безопасность
                  </div>
                  <div className="text-sm text-gray-600">Стерильность 100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
