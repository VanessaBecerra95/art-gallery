import { useState } from "react";
import ImageModal from "~/components/ImageModal";

interface Image {
  id: string;
  url: string;
  title: string;
  description: string;
  author: string;
  year: number;
}

export const meta = () => {
  return [
    { title: "Galería de arte" },
    { name: "description", content: "Bienvenidos a nuestra galería" },
  ];
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState<Image[]>([
    {
      id: "1",
      url: "/images/art1.webp",
      title: "Butterfly",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Pablo Picasso",
      year: 2022,
    },
    {
      id: "2",
      url: "/images/art2.webp",
      title: "Soda",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Frida Kahlo",
      year: 2023,
    },
    {
      id: "3",
      url: "/images/art3.webp",
      title: "Colorful",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Vincent van Gogh",
      year: 2022,
    },
    {
      id: "4",
      url: "/images/art4.webp",
      title: "Circles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Leonardo da Vinci",
      year: 2024,
    },
    {
      id: "5",
      url: "/images/art5.webp",
      title: "Black",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Georgia O'Keeffe",
      year: 2017,
    },
    {
      id: "6",
      url: "/images/art6.webp",
      title: "Flowers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Yayoi Kusama",
      year: 2012,
    },
    {
      id: "7",
      url: "/images/art7.webp",
      title: "Wonderful",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Kandinsky",
      year: 2015,
    },
    {
      id: "8",
      url: "/images/art8.webp",
      title: "Adonis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Damien Hirst",
      year: 2018,
    },
  ]);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const deleteImage = (imageId: string) => {
    setImages(images.filter((image) => image.id !== imageId));
  };

  return (  
    <main className="main-container">  
      <h1 className="title-gallery text-4xl font-bold leading-tight mb-5 capitalize p-10 text-center">  
        Algunas muestras de la galería  
      </h1>  
      <div className="grid gap-10 m-10 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-screen-2xl p-4 place-items-center">  
        {images.map((image) => (  
          <div key={image.id} className="max-w-sm rounded overflow-hidden shadow-lg">  
            <button  
              className="w-full h-96 hover:scale-105 cursor-pointer"  
              onClick={() => openModal(image)}  
              onKeyDown={(e) => {  
                if (e.key === "Enter" || e.key === " ") {  
                  openModal(image);  
                }  
              }}  
              style={{ background: `url(${image.url})`, backgroundSize: 'cover' }}  
              aria-label={`Abrir ${image.title}`}
            />  
            <div className="px-6 py-4">  
              <div className="font-bold text-xl mb-2">{image.title}</div>  
              <p className="text-gray-700 text-base">{image.description}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
  
      <ImageModal  
        isOpen={isModalOpen}  
        onClose={closeModal}  
        image={selectedImage}  
        onDelete={(imageId) => {  
          deleteImage(imageId);  
          closeModal();  
        }}  
      />  
    </main>  
  );
}
