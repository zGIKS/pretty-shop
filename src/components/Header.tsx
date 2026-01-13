import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

export default function Header() {
  const [searchQuery, setSearchQuery] = createSignal("");

  const handleSearch = (e: Event) => {
    e.preventDefault();
    console.log("Buscando:", searchQuery());
    // Aquí puedes implementar la lógica de búsqueda
  };

  return (
    <header class="bg-linear-to-r from-blue-600 to-purple-600 shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between flex-wrap gap-4">
          {/* Logo/Brand */}
          <div class="text-white text-2xl font-bold">
            <A href="/" class="hover:text-blue-200 transition-colors">
              MiApp
            </A>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} class="flex-1 max-w-md mx-4">
            <div class="relative">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery()}
                onInput={(e) => setSearchQuery(e.currentTarget.value)}
                class="w-full px-4 py-2 pl-10 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
              />
              <svg
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </form>

          {/* Navigation */}
          <nav class="flex items-center gap-6">
            <A
              href="/"
              class="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Inicio
            </A>
            <A
              href="/products"
              class="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Productos
            </A>
            <A
              href="/about"
              class="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Contacto
            </A>
          </nav>
        </div>
      </div>
    </header>
  );
}
