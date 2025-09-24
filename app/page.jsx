'use client'
import Image from "next/image";

export default function Home(){
  return(<div className="min-h-screen p-8">
    <header className="flex justify-between items-center border-b border-amber-400/30 pb-3">
      <h1 className="text-3xl font-serif text-amber-300">Aurana Chocolate</h1>
      <nav className="flex gap-4 text-sm">
        <a href="#about" className="hover:text-amber-200">О бренде</a>
        <a href="#catalog" className="hover:text-amber-200">Каталог</a>
        <a href="#contact" className="hover:text-amber-200">Контакты</a>
      </nav>
    </header>
    <section id="about" className="mt-10 max-w-3xl">
      <h2 className="text-2xl font-serif text-amber-200">Aurana Chocolate — больше, чем шоколад</h2>
      <p className="mt-3 text-amber-100">Наш шоколад — это не просто сладость, а ручная работа, созданная с любовью. Каждая плитка Aurana — это уникальное сочетание вкусов, которые вызывают настоящий WOW‑эффект.</p>
      <p className="mt-3 text-amber-100">Мы используем бельгийский шоколад и натуральные добавки: клубника, манго, пломбир и крем‑брюле. Ограниченные коллекции доступны лишь в определённое время.</p>
      <p className="mt-3 text-amber-100">Aurana Chocolate — идеальный подарок для тех, кто ценит эстетику, вкус и атмосферу.</p>
    </section>
    <section id="catalog" className="mt-12">
      <h2 className="text-2xl font-serif text-amber-200 mb-6">Ассортимент</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="card-gleam gold-glow p-4 rounded-xl bg-[#1a1310]">
          <Image src="/images/aurana-strawberry.jpg" width={400} height={300} alt="Шоколад с клубникой" className="rounded-lg mb-2"/>
          <h3 className="text-amber-200 font-medium">Плитка с клубникой</h3>
          <p className="text-sm text-amber-100">1500 ₽</p>
          <a href="https://wa.me/" className="inline-block mt-2 px-3 py-1 bg-amber-300 text-black rounded-lg">Заказать</a>
        </div>
        <div className="card-gleam gold-glow p-4 rounded-xl bg-[#1a1310]">
          <Image src="/images/aurana-creme-brulee.jpg" width={400} height={300} alt="Шоколад пломбир крем-брюле" className="rounded-lg mb-2"/>
          <h3 className="text-amber-200 font-medium">Плитка с пломбиром и крем-брюле</h3>
          <p className="text-sm text-amber-100">1600 ₽</p>
          <a href="https://wa.me/" className="inline-block mt-2 px-3 py-1 bg-amber-300 text-black rounded-lg">Заказать</a>
        </div>
        <div className="card-gleam gold-glow p-4 rounded-xl bg-[#1a1310]">
          <Image src="/images/aurana-mango.jpg" width={400} height={300} alt="Шоколад с манго" className="rounded-lg mb-2"/>
          <h3 className="text-amber-200 font-medium">Плитка с манго</h3>
          <p className="text-sm text-amber-100">1500 ₽</p>
          <a href="https://wa.me/" className="inline-block mt-2 px-3 py-1 bg-amber-300 text-black rounded-lg">Заказать</a>
        </div>
      </div>
    </section>
    <footer id="contact" className="mt-12 border-t border-amber-400/20 pt-6 flex flex-col sm:flex-row justify-between text-sm text-amber-100">
      <p>© {new Date().getFullYear()} Aurana Chocolate</p>
      <div className="flex gap-4">
        <a href="https://wa.me/" className="hover:text-amber-200">WhatsApp</a>
        <a href="https://instagram.com/aurana.chocolate" className="hover:text-amber-200">Instagram</a>
      </div>
    </footer>
  </div>)
}