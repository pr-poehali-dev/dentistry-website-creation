import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Красота и здоровье
              <span className="text-blue-600"> ваших питомцев</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Профессиональный груминг с любовью к каждому питомцу. Стрижки,
              мытье, уход за когтями в комфортной атмосфере.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записать питомца
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Консультация
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2000+</div>
                <div className="text-sm text-gray-600">довольных питомцев</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">безопасность</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop"
              alt="Груминг салон для животных"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">С любовью</div>
                  <div className="text-sm text-gray-600">К каждому питомцу</div>
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
