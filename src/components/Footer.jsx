import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer class="mx-auto w-full bg-primary-400">
      <div class="w-full p-4 py-6 lg:py-8 px-10">
        <div class="md:flex md:justify-between">
          <div class="mb-6 flex flex-col justify-between md:mb-0">
            <a href="#" class="flex items-center">
              <img
                src="/illustrator/logo/footer.png"
                class="me-3 h-auto w-[220px]"
                alt="NusaBond Logo"
              />
            </a>

            <div class="mb-5 mt-5 md:mb-0">
              <h2 class="mb-6 text-base font-semibold uppercase text-white">
                Hubungi Kami
              </h2>
              <ul class="font-medium text-gray-300">
                <li class="mb-4 flex items-center gap-3 text-base">
                  {/* <!-- Ikon Lokasi --> */}
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-gray-400"
                  />

                  <a href="https://smkn46jaktim.sch.id" class="hover:underline">
                    SMK Negeri 46 Jakarta
                  </a>
                </li>
                <li class="mb-4 flex items-center gap-3 text-base">
                  {/* <!-- Ikon Email --> */}
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-400"
                  />
                  <a
                    href="mailto:NusaBond@gmail.com?subject=Hallo NusaBond!....."
                    class="hover:underline"
                  >
                    NusaBond@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-28">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Akses Konten
              </h2>
              <ul class="font-medium text-gray-300">
                <li class="mb-4">
                  <a href="index.html" class="hover:underline">
                    Beranda
                  </a>
                </li>
                <li class="mb-4">
                  <a href="about.html" class="hover:underline">
                    Tentang
                  </a>
                </li>
                <li class="group relative">
                  <a
                    href="javascript:void(0)"
                    class="block rounded py-1 text-sm transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full hover:underline hover:before:opacity-100 fill-white"
                  >
                    Pulau
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      height="12px"
                      class="ml-1 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                        data-name="16"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                  <div class="absolute top-0 max-lg:top-6 left-16 z-50 flex shadow-md bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[200px] px-4 group-hover:pb-3 group-hover:pt-2 transition-all duration-500">
                    <div class="lg:min-w-[120px] max-lg:min-w-[100px]">
                      <ul>
                        <li class="py-1 rounded relative group">
                          <a
                            href="sumatera.html"
                            class="block rounded px-2 py-1 text-sm transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                          >
                            Sumatera
                          </a>
                        </li>
                        <li class="py-1 rounded relative group">
                          <a
                            href="#"
                            class="block rounded px-2 py-1 text-sm transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                          >
                            Jawa
                          </a>
                        </li>
                        <li class="py-1 rounded relative group">
                          <a
                            href="kalimantan.html"
                            class="block rounded px-2 py-1 text-sm transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                          >
                            Kalimantan
                          </a>
                        </li>
                        <li class="py-1 rounded relative group">
                          <a
                            href="sulawesi.html"
                            class="block rounded px-2 py-1 text-sm transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                          >
                            Sulawesi
                          </a>
                        </li>
                        <li class="py-1 rounded relative group">
                          <a
                            href="papua.html"
                            class="block rounded px-2 py-1 text-sm transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                          >
                            Papua
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Sumber Data
              </h2>
              <ul class="font-medium text-gray-300">
                <li class="mb-4">
                  <a
                    href="https://repositori.kemdikbud.go.id"
                    class="lowercase hover:underline"
                  >
                    kemdikbud.go.id
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://digilib.isi.ac.id/"
                    class="lowercase hover:underline"
                  >
                    digilib.isi.ac.id
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://journal.isi.ac.id/"
                    class="lowercase hover:underline"
                  >
                    journal.isi.ac.id
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://repository.uniga.ac.id/"
                    class="lowercase hover:underline"
                  >
                    uniga.ac.id
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://media.neliti.com/"
                    class="lowercase hover:underline"
                  >
                    media.neliti.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Credit
              </h2>
              <ul class="font-medium text-gray-300">
                <li class="mb-4">
                  <a href="https://pixabay.com" class="hover:underline">
                    Pixabay
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://pinterest.com" class="hover:underline">
                    Pinterest
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://sketchfab.com/" class="hover:underline">
                    Sketchfab
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-center text-sm text-gray-300">
            Dibuat oleh tim <span class="font-bold">Forensix</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
