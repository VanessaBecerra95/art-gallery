import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Galería de arte" },
    { name: "description", content: "Bienvenidos a nuestra galería" },
  ];
};

export default function Contact() {
  return (
    <main className="main-container">
      <div className="contact-form-container">
        <h1 className="contact-form-title">Formulario de contacto</h1>
        <p className="contact-form-text">
          ¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti! Por
          favor, completa el siguiente formulario y te responderemos a la
          brevedad.
        </p>
        <form className="contact-form">
          <label htmlFor="name" className="contact-form-label">
            Nombre Completo:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-form-input"
            required
          />
          <label htmlFor="email" className="contact-form-label">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-form-input"
            required
          />
          <label htmlFor="requestType" className="contact-form-label">
            Tipo de solicitud:
          </label>
          <select
            id="requestType"
            name="requestType"
            className="contact-form-select"
            required
          >
            <option value="purchase">Compra</option>
            <option value="inquiry">Consulta</option>
            <option value="sale">Venta</option>
          </select>
          <label htmlFor="message" className="contact-form-label">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="contact-form-textarea"
            required
          />
          <button type="submit" className="contact-form-button">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
