import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Bienvenidos a nuestra galería" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Bienvenidos a la Galería de Arte</h1>
      <div>
        <p>
          Bienvenidos a nuestra galería de arte en línea, un espacio dedicado a
          la exposición de obras únicas y cautivadoras de artistas emergentes y
          consolidados. Aquí encontrarás una colección diversa que abarca desde
          pinturas impresionistas hasta esculturas contemporáneas, cada pieza
          seleccionada por su calidad y capacidad de inspirar. Nuestra misión es
          acercar el arte a todos, ofreciendo una plataforma accesible para
          disfrutar y adquirir obras excepcionales. Explora nuestra galería
          virtual y déjate envolver por la belleza y creatividad de nuestros
          artistas, descubriendo tesoros artísticos que enriquecerán tu hogar y
          tu vida.
        </p>
      </div>
    </div>
  );
}
