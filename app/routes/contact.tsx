import { useState } from "react";
import Toast from "~/components/Toast";

interface FormData {
  name: string;
  email: string;
  requestType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    requestType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [toast, setToast] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "message") {
      const normalizedValue = value.trim().toLowerCase();
      let newRequestType = "";

      if (normalizedValue.includes("venta")) {
        newRequestType = "sale";
      } else if (normalizedValue.includes("compra")) {
        newRequestType = "purchase";
      } else if (normalizedValue.includes("consulta")) {
        newRequestType = "inquiry";
      }

      setFormData({
        ...formData,
        message: value,
        requestType: newRequestType,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
  
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    }
  
    if (!formData.requestType) {
      newErrors.requestType = "El tipo de solicitud es obligatorio";
    }
  
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    }
  
    return newErrors;
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setToast({
        type: "error",
        message: "Por favor, completa todos los campos obligatorios.",
      });
    } else {
      console.log("Formulario enviado", formData);
      setErrors({});
      setToast({ type: "success", message: "Formulario enviado con éxito." });
      setFormData({ name: "", email: "", requestType: "", message: "" });
    }
  };

  return (
    <main className="main-container">
      <div className="contact-form-container">
        <h1 className="contact-form-title">Formulario de contacto</h1>
        <p className="contact-form-text">
          ¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti! Por
          favor, completa el siguiente formulario y te responderemos a la
          brevedad.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="contact-form-label">
            Nombre Completo:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-form-input"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="error-message text-sm text-red-600 dark:text-red-400">
              {errors.name}
            </p>
          )}

          <label htmlFor="email" className="contact-form-label">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-form-input"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="error-message text-sm text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          )}

          <label htmlFor="requestType" className="contact-form-label">
            Tipo de solicitud:
          </label>
          <select
            id="requestType"
            name="requestType"
            className="contact-form-select"
            value={formData.requestType}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="purchase">Compra</option>
            <option value="inquiry">Consulta</option>
            <option value="sale">Venta</option>
          </select>
          {errors.requestType && (
            <p className="error-message text-sm text-red-600 dark:text-red-400">
              {errors.requestType}
            </p>
          )}

          <label htmlFor="message" className="contact-form-label">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="contact-form-textarea"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="error-message p-2 text-xs text-red-600 dark:text-red-400">
              {errors.message}
            </p>
          )}

          <button type="submit" className="contact-form-button">
            Enviar
          </button>
        </form>
        <div className="toast-container pt-4 flex justify-center">
          {toast.type && (
            <Toast
              type={toast.type}
              message={toast.message}
              onClose={() => setToast({ type: null, message: "" })}
            />
          )}
        </div>
      </div>
    </main>
  );
}
