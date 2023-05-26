import React, { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import axios from "axios";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hoveredCharacterId, setHoveredCharacterId] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const charactersPerPage = 5;

  const fetchCharacters = async (page) => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com:443/v1/public/characters",
        {
          params: {
            apikey: "69512f5828be08dc3beeb74a45664d4e",
            offset: (page - 1) * charactersPerPage,
            limit: charactersPerPage,
          },
        }
      );
      const totalCharacters = response.data.data.total;
      const calculatedTotalPages = Math.ceil(
        totalCharacters / charactersPerPage
      );
      setCharacters(response.data.data.results);
      setTotalPages(calculatedTotalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCharactersBySearch = async () => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com:443/v1/public/characters",
        {
          params: {
            apikey: "69512f5828be08dc3beeb74a45664d4e",
            offset: (currentPage - 1) * charactersPerPage,
            limit: charactersPerPage,
            nameStartsWith: searchTerm,
          },
        }
      );
      const totalCharacters = response.data.data.total;
      const calculatedTotalPages = Math.ceil(
        totalCharacters / charactersPerPage
      );
      setCharacters(response.data.data.results);
      setTotalPages(calculatedTotalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchCharactersBySearch();
    } else {
      fetchCharacters(currentPage);
    }
  }, [currentPage, searchTerm]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleMouseEnter = (characterId) => {
    setHoveredCharacterId(characterId);
  };

  const handleMouseLeave = () => {
    setHoveredCharacterId(null);
  };

  const handleCharacterClick = async (character) => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${character.id}`,
        {
          params: {
            apikey: "69512f5828be08dc3beeb74a45664d4e",
          },
        }
      );
      const selectedCharacterDetails = response.data.data.results[0];
      setSelectedCharacter(selectedCharacterDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reiniciar la página cuando se realiza una búsqueda
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search characters"
          value={searchTerm}
          onChange={handleSearch}
          className="px-2 py-1 border bg-[#111111] w-96  text-lg text-[#c89b3c]  border-gray-300 rounded-md focus:outline-none focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 ml-7">
        {characters.map((character) => (
          <div
            className="bg-[#111111] rounded-lg shadow-md cursor-pointer w-56 h-96 border border-solid border-[#42331A] "
            key={character.id}
            onMouseEnter={() => handleMouseEnter(character.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCharacterClick(character)}
          >
            <div className="relative">
              <div className="h-12 mb-2">
                <h2 className="text-sl mt-4 text-[#F0E6D2] uppercase text-center">
                  {character.name}
                </h2>
              </div>

              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className="mx-auto mb-10 h-36 w-36 rounded-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div
                  className={`w-40 h-40 mt-14 rounded-full border-dotted border-[#C89B3C] border-4 absolute ${
                    hoveredCharacterId === character.id ? "animate-spin" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="bg-[#1E2328] p-1 w-2/3 mx-auto border border-s-[#5B5A56] rounded-md">
              <p className="text-[#F0E6D2] text-2xl text-center">
                Comics: {character.comics.available}
              </p>
            </div>

            <div className="bg-[#1E2328] p-1 w-2/3 mx-auto border border-s-[#5B5A56] rounded-md mt-4">
              <p className="text-[#F0E6D2] text-2xl text-center">
                Películas: {character.series.available}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-4 pb-4">
        <button
          className="bg-[#c89b3c] py-2 px-2 rounded-full"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <GrFormPrevious className="text-black" />
        </button>
        <p className="mx-4 text-[#e0ac3a] text-xl ">
          {currentPage}/{totalPages}
        </p>
        <button
          className="bg-[#c89b3c] py-2 px-2 rounded-full"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <GrFormNext />
        </button>
      </div>

      {/* MODAL */}

      {selectedCharacter && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-[#111111] rounded-lg cursor-pointer border border-solid border-[#42331A] shadow-md w-2/3">
            <div className="mt-5">
              <h2 className="text-4xl text-center  font-bold mb-4 text-white">
                {selectedCharacter.name}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <img
                  src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
                  alt={selectedCharacter.name}
                  className="mx-auto h-60 w-60 rounded-md"
                />
              </div>

              <div className="my-auto">
                <p className="text-[#F0E6D2]  text-2xl ml-3">
                  <strong className="text-[#c89b3c] text-4xl"> Comics: </strong>
                  {selectedCharacter.comics.available}
                </p>
                <p className="text-[#F0E6D2]  text-2xl ml-3">
                  <strong className="text-[#c89b3c] text-4xl"> Series: </strong>{" "}
                  {selectedCharacter.series.available}
                </p>
                <p className="text-[#F0E6D2] text-2xl ml-3 ">
                  <strong className="text-[#c89b3c] text-4xl">
                    {" "}
                    Historias:
                  </strong>{" "}
                  {selectedCharacter.stories.available}
                </p>
              </div>
            </div>

            <div className="text-gray-600">
              <h2 className="text-[#F0E6D2] uppercase text-center text-3xl mt-5">
                URLs adicionales:
              </h2>
              <div className="flex items-center justify-center ">
                {selectedCharacter.urls.map((url) => (
                  <p
                    key={url.type}
                    className="text-red-600 hover:text-red-800 text-2xl uppercase ml-7"
                  >
                    <a href={url.url} target="_blank" rel="noopener noreferrer">
                      {url.type}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center my-4">
              <button
                className="bg-[#c89b3c] hover:bg-[#c99015]  text-black uppercase py-2 px-4 rounded"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
