import type { MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Bienvenidos a nuestra galería" },
  ];
};

export default function Index() {
  return (
    <main className="main-container">
      <div className="py-16 content">
        <div className="container m-auto px-6">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7">
              <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">
                Bienvenidos a la Galería de{" "}
                <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                  Arte
                </mark>
              </h1>

              <p className="text-xl">
                Bienvenidos a nuestra galería de arte en línea, un espacio
                dedicado a la exposición de obras únicas y cautivadoras de
                artistas emergentes y consolidados. Aquí encontrarás una
                colección diversa que abarca desde pinturas impresionistas hasta
                esculturas contemporáneas, cada pieza seleccionada por su
                calidad y capacidad de inspirar. Nuestra misión es acercar el
                arte a todos, ofreciendo una plataforma accesible para disfrutar
                y adquirir obras excepcionales. Explora nuestra galería virtual
                y déjate envolver por la belleza y creatividad de nuestros
                artistas, descubriendo tesoros artísticos que enriquecerán tu
                hogar y tu vida.
              </p>

              <div className="py-5">
                <Link
                  to="/gallery"
                  className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-blue-500 inline-block mr-3"
                >
                  Galería
                </Link>
                <Link
                  to="/contact"
                  className="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black"
                >
                  Contacto
                </Link>
              </div>
            </div>
            <div className="lg:w-5/12 order-2">
              <img
                src="/images/hero.webp"
                alt="Greek woman statue"
                className="image-hero rounded-lg border-8 border-slate-50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
