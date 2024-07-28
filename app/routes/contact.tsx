import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Galería de arte" },
    { name: "description", content: "Bienvenidos a nuestra galería" },
  ];
};

export default function Contact() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Formulario de contacto</h1>
      <div>
        <p>
          ¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti! Por
          favor, completa el siguiente formulario y te responderemos a la
          brevedad.
        </p>
        <form className="mt-4 md:w-1/2">
          <label htmlFor="name" className="block">
            Nombre Completo:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded p-2"
            required
          />
          <label htmlFor="email" className="block mt-4">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded p-2"
            required
          />
          <label htmlFor="requestType" className="block mt-4">
            Tipo de solicitud:
          </label>
          <select
            id="requestType"
            name="requestType"
            className="w-full border border-gray-300 rounded p-2"
            required
          >
            <option value="purchase">Compra</option>
            <option value="inquiry">Consulta</option>
            <option value="sale">Venta</option>
          </select>
          <label htmlFor="message" className="block mt-4">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Enviar
          </button>
        </form>
        <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
          <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
            Dirección: Calle random #123 Teléfono: +56 9 1234 5678
          </div>
        </footer>
      </div>
    </div>
  );
}
