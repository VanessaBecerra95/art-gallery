import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Galería de arte" },
    { name: "description", content: "Bienvenidos a nuestra galería" },
  ];
};

export default function Gallery() {
  return (
    <main className="main-container">
      <div className="gallery-container">
        <h1 className="title-gallery text-4xl font-bold leading-tight mb-5 capitalize p-10 text-center">
          Algunas muestras de la galería
        </h1>
        <div className="grid gap-10 m-10 mx-auto sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-screen-2xl p-4  place-items-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105">
            <img
              className="w-full h-96 object-cover"
              src="/images/art1.webp"
              alt="butterfly and woman"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Butterfly</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #butterfly
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #art
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #spring
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105">
            <img
              className="w-full h-96 object-cover"
              src="/images/art2.webp"
              alt="statue of woman with soda"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Soda</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #soda
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #woman
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #art
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105">
            <img
              className="w-full h-96 object-cover"
              src="/images/art3.webp"
              alt="man with colorful background"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Colorful</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #art
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #boy
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #colorful
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105">
            <img
              className="w-full h-96 object-cover"
              src="/images/art4.webp"
              alt="cicles and colors"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Circles</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #circles
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #art
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #colors
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105">
            <img
              className="w-full h-96 object-cover"
              src="/images/art5.webp"
              alt="woman painting black"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Black</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #woman
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #art
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #colorful
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105">
            <img
              className="w-full h-96 object-cover"
              src="/images/art6.webp"
              alt="colorful random art"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Flowers</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #colorful
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #art
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #flowers
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105">
            <img
              className="w-full h-96 object-cover"
              src="/images/art7.webp"
              alt="woman and sunflower"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Wonderful</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #sunflower
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #art
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105">
            <img
              className="w-full h-96 object-cover"
              src="/images/art8.webp"
              alt="statue greek adonis"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Adonis</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Statue
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Greek
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
