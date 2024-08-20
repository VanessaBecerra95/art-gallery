import React from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
  onDelete: (imageId: string) => void; 
}

interface Image {
  id: string;
  url: string;
  title: string;
  description: string;
  author: string;
  year: number;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image, onDelete }) => {
  if (!isOpen || !image) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-center">
          <img src={image.url} alt={image.title} className="w-2/3 h-auto mb-4" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
        <p className="text-gray-700 mb-2">Autor: {image.author}</p>
        <p className="text-gray-700 mb-2">Año: {image.year}</p>
        <p className="text-gray-700 mb-4">{image.description}</p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => onDelete(image.id)}
          >
            Eliminar
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
