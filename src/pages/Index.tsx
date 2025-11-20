import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent via-primary to-secondary px-4 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-16 h-16 bg-muted animate-pixel-bounce"></div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-primary animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-secondary animate-pixel-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-accent animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto text-center relative z-10 animate-slide-in">
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 mx-auto bg-primary pixel-shadow rounded-sm animate-float">
              <img
                src="https://cdn.poehali.dev/projects/2b2e9beb-14dc-4bb6-aa71-89b0b4f9da1d/files/358188be-b58c-4b9c-8ff6-5a13199fc7ce.jpg"
                alt="Оранжевый кубик с маской"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-rubik font-black mb-6 text-foreground text-pixel">
            HERTZOGEN
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-foreground font-rubik">
            Легендарный оранжевый кубик с маской
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="pixel-shadow-sm hover:translate-y-1 transition-transform text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-rubik font-bold"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Смотреть контент
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="pixel-shadow-sm hover:translate-y-1 transition-transform text-lg px-8 py-6 border-4 border-foreground bg-primary text-primary-foreground hover:bg-primary/90 font-rubik font-bold"
            >
              <Icon name="Image" className="mr-2" size={24} />
              Галерея
            </Button>
          </div>
        </div>
      </section>

      <section id="level" className="py-20 px-4 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className={`border border-muted-foreground ${i % 3 === 0 ? 'bg-primary' : i % 2 === 0 ? 'bg-secondary' : ''}`}></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-rubik font-black text-center mb-12 text-foreground text-pixel">
            🎮 САМЫЙ ЛУЧШИЙ УРОВЕНЬ В МИРЕ
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="pixel-shadow bg-primary border-4 border-muted hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.poehali.dev/projects/2b2e9beb-14dc-4bb6-aa71-89b0b4f9da1d/files/fa3ed057-1a03-4c6f-b0b1-e0b46f70ea7a.jpg"
                alt="Игровой уровень"
                className="w-full h-64 object-cover rounded-sm"
              />
              <div className="p-6">
                <h3 className="text-3xl font-rubik font-bold mb-4 text-primary-foreground">
                  Эпичный геймплей
                </h3>
                <p className="text-lg text-primary-foreground font-roboto leading-relaxed">
                  Невероятные приключения в пиксельном мире с кубическими героями и бесконечными возможностями!
                </p>
              </div>
            </Card>

            <Card className="pixel-shadow bg-secondary border-4 border-muted hover:scale-105 transition-transform duration-300">
              <div className="p-6 h-full flex flex-col justify-center">
                <div className="text-center space-y-6">
                  <div className="text-8xl">🏆</div>
                  <h3 className="text-3xl font-rubik font-bold text-secondary-foreground">
                    Топ достижений
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-muted p-4 pixel-shadow-sm">
                      <p className="text-xl font-rubik font-semibold text-muted-foreground">⭐ 1000+ блоков собрано</p>
                    </div>
                    <div className="bg-muted p-4 pixel-shadow-sm">
                      <p className="text-xl font-rubik font-semibold text-muted-foreground">🎯 99% прохождение</p>
                    </div>
                    <div className="bg-muted p-4 pixel-shadow-sm">
                      <p className="text-xl font-rubik font-semibold text-muted-foreground">💎 Все секреты найдены</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="aboba" className="py-20 px-4 bg-gradient-to-b from-secondary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-24 h-24 bg-muted pixel-shadow animate-pixel-bounce"></div>
          <div className="absolute bottom-32 right-32 w-20 h-20 bg-primary pixel-shadow animate-float"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-rubik font-black text-center mb-16 text-foreground text-pixel">
            ⚡ УЛЬТРА АБОБА
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="pixel-shadow bg-card border-4 border-muted hover:scale-110 transition-transform duration-300 hover:rotate-2">
              <img
                src="https://cdn.poehali.dev/projects/2b2e9beb-14dc-4bb6-aa71-89b0b4f9da1d/files/358188be-b58c-4b9c-8ff6-5a13199fc7ce.jpg"
                alt="Оранжевый кубик"
                className="w-full h-72 object-cover rounded-sm"
              />
              <div className="p-4 bg-primary">
                <p className="text-xl font-rubik font-bold text-center text-primary-foreground">Классический взгляд</p>
              </div>
            </Card>

            <Card className="pixel-shadow bg-card border-4 border-muted hover:scale-110 transition-transform duration-300 hover:-rotate-2">
              <img
                src="https://cdn.poehali.dev/projects/2b2e9beb-14dc-4bb6-aa71-89b0b4f9da1d/files/d9231ad7-46e7-4fe2-ade8-c6ad5963e12d.jpg"
                alt="Кубик в действии"
                className="w-full h-72 object-cover rounded-sm"
              />
              <div className="p-4 bg-secondary">
                <p className="text-xl font-rubik font-bold text-center text-secondary-foreground">В действии</p>
              </div>
            </Card>

            <Card className="pixel-shadow bg-card border-4 border-muted hover:scale-110 transition-transform duration-300 hover:rotate-2">
              <img
                src="https://cdn.poehali.dev/projects/2b2e9beb-14dc-4bb6-aa71-89b0b4f9da1d/files/fa3ed057-1a03-4c6f-b0b1-e0b46f70ea7a.jpg"
                alt="Игровой мир"
                className="w-full h-72 object-cover rounded-sm"
              />
              <div className="p-4 bg-accent">
                <p className="text-xl font-rubik font-bold text-center text-accent-foreground">Его мир</p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="pixel-shadow hover:translate-y-1 transition-transform text-2xl px-12 py-8 bg-muted hover:bg-muted/90 text-muted-foreground font-rubik font-black border-4 border-foreground"
            >
              <Icon name="Youtube" className="mr-3" size={32} />
              ПОДПИСАТЬСЯ НА КАНАЛ
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-8 px-4 border-t-8 border-foreground">
        <div className="container mx-auto text-center">
          <p className="text-lg font-rubik text-muted-foreground">
            Фан-сайт посвящён персонажу Hertzogen • Создано с 💎 в пиксельном стиле
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
