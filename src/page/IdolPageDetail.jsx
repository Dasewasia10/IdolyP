import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const IdolPageDetail = ({ isDarkMode }) => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedVoiceLanguage, setSelectedVoiceLanguage] = useState("en");
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  console.log(name);

  useEffect(() => {
    // Dapatkan data berdasarkan nama dari API menggunakan useEffect atau fetch API
    // Misalnya, panggil fungsi untuk mengambil data berdasarkan nama dan simpan hasilnya ke dalam state `data`

    // Contoh penggunaan fetch API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://idoly-pride-api.vercel.app/api/idol/name/${name}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name]);

  const handlePlayAudio = (voiceIndex) => {
    const audio = document.getElementById("audio");
    let selectedVoiceData = null;

    switch (voiceIndex) {
      case 1:
        selectedVoiceData = data.voice[0].voice1[0];
        break;
      case 2:
        selectedVoiceData = data.voice[0].voice2[0];
        break;
      case 3:
        selectedVoiceData = data.voice[0].voice3[0];
        break;
      case 4:
        selectedVoiceData = data.voice[0].voice4[0];
        break;
      default:
        break;
    }

    if (selectedVoiceData) {
      setSelectedVoice(selectedVoiceData);
      audio.src = selectedVoiceData.audio;
      audio.play();
      setIsAudioPlaying(true);
    } else {
      setSelectedVoice(null);
      setSelectedVoiceLanguage("en"); // Reset the language selection if no voice is selected
      audio.src = "";
      setIsAudioPlaying(false);
    }
  };

  const handleAudioEnded = () => {
    setIsAudioPlaying(false);
    setSelectedVoice(null); // Reset selectedVoice to null when audio ends
  };

  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const newRandomNumber = Math.floor(Math.random() * 2) + 1;
    setRandomNumber(newRandomNumber);
  }, []);

  console.log(randomNumber);

  return (
    <div
      className={`detail-page w-full p-10  ${
        isDarkMode
          ? "bg-gray-800 bg-opacity-60"
          : "bg-gray-800 bg-opacity-30 text-gray-200"
      }`}
    >
      <div id="idol-page-detail">
        {data ? (
          <>
            <h1
              className="text-7xl tracking-widest"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              {data.name} {`(${data.jpname})`}
            </h1>
            {/* Tampilkan rincian data sesuai ID */}
            <div className="relative mt-10 h-full">
              <img
                className="no-right-click -z-10 mx-auto"
                src={data.image[0][`sprite${randomNumber}`]}
                alt=""
              />
              <div>
                {/* Kotak berisi data karakter semacam group, age, dll. */}
                <div
                  className={`absolute left-40 top-60 flex max-w-xs flex-row items-center space-x-4 rounded-xl px-4 py-2 opacity-80 shadow-md ${
                    isDarkMode ? "bg-gray-200 text-gray-800" : "bg-gray-800 "
                  }`}
                  style={
                    ({ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" },
                    { boxShadow: "0 2px 4px rgba(0, 0, 0, 1)" })
                  }
                >
                  <img
                    className="h-20 w-auto"
                    src={`${data.image[0].icon}`}
                    alt=""
                  />
                  <p className="text-xl font-bold">{data.va}</p>
                </div>
                {/* Kotak berisi data karakter semacam group, age, dll. */}
                <div
                  className={`absolute right-40 top-60 max-w-xs rounded-xl px-6 py-4 opacity-80 shadow-md ${
                    isDarkMode ? "bg-gray-200 text-gray-800" : "bg-gray-800 "
                  }`}
                  style={
                    ({ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" },
                    { boxShadow: "0 2px 4px rgba(0, 0, 0, 1)" })
                  }
                >
                  <p className="">
                    Group:{" "}
                    <span className="font-bold">{data.detail[0].group}</span>
                  </p>
                  <p className="">
                    Age: <span className="font-bold">{data.detail[0].age}</span>
                  </p>
                  <p className="">
                    Birthday:{" "}
                    <span className="font-bold">{data.detail[0].birthday}</span>
                  </p>
                  <p className="">
                    Hobby:{" "}
                    <span className="font-bold">{data.detail[0].hobby}</span>
                  </p>
                  <p className="">
                    Almamamter:{" "}
                    <span className="font-bold">
                      {data.detail[0].almameter}
                    </span>
                  </p>
                </div>
                {/* Kotak berisi logo group. */}
                <div
                  className="absolute left-80 top-0 max-w-xs rounded-xl bg-gray-200 px-6 py-4 opacity-80 shadow-md"
                  style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 1)" }}
                >
                  <img
                    className="h-28 w-auto"
                    src={data.attribute[0].group_icon}
                    alt=""
                  />
                </div>
                {/* Kotak berisi deskripsi karakter dalam 3 bahasa. */}
                <div
                  className={`absolute left-16 top-96 max-w-lg rounded-xl px-6 py-4 font-notoJP opacity-80 shadow-md ${
                    isDarkMode ? "bg-gray-200 text-gray-800" : "bg-gray-800 "
                  }`}
                  style={
                    ({ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" },
                    { boxShadow: "0 2px 4px rgba(0, 0, 0, 1)" })
                  }
                >
                  <div className="language-menu space-x-10">
                    <button
                      onClick={() => setSelectedLanguage("jp")}
                      className={`${
                        selectedLanguage === "jp" && isDarkMode
                          ? "active rounded-t-md bg-gray-800 bg-opacity-30 px-2 pb-1"
                          : ""
                      } ${
                        selectedLanguage === "jp" && !isDarkMode
                          ? "active rounded-t-md bg-gray-300 bg-opacity-30 px-2 pb-1"
                          : ""
                      }`}
                    >
                      JP
                    </button>
                    <button
                      onClick={() => setSelectedLanguage("en")}
                      className={`${
                        selectedLanguage === "en" && isDarkMode
                          ? "active rounded-t-md bg-gray-800 bg-opacity-30 px-2 pb-1"
                          : ""
                      } ${
                        selectedLanguage === "en" && !isDarkMode
                          ? "active rounded-t-md bg-gray-300 bg-opacity-30 px-2 pb-1"
                          : ""
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setSelectedLanguage("id")}
                      className={`${
                        selectedLanguage === "id" && isDarkMode
                          ? "active rounded-t-md bg-gray-800 bg-opacity-30 px-2 pb-1"
                          : ""
                      } ${
                        selectedLanguage === "id" && !isDarkMode
                          ? "active rounded-t-md bg-gray-300 bg-opacity-30 px-2 pb-1"
                          : ""
                      }`}
                    >
                      ID
                    </button>
                  </div>
                  <div
                    className={`content-box rounded-xl bg-opacity-30 p-2 ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-200"
                    }`}
                  >
                    {data ? (
                      <p>{data.description[0][selectedLanguage]}</p>
                    ) : (
                      <p>Loading data...</p>
                    )}
                  </div>
                </div>
              </div>
              {/* Kotak berisi voice karakter beserta teks voice dalam 3 bahasa dan 4 format penulisan. */}
              <div
                className={`absolute right-16 top-[40rem] flex max-w-lg flex-row rounded-xl bg-opacity-80 px-6 py-4 font-notoJP shadow-md ${
                  isDarkMode ? "bg-gray-200 text-gray-800" : "bg-gray-800 "
                }`}
                style={
                  ({ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" },
                  { boxShadow: "0 2px 4px rgba(0, 0, 0, 1)" })
                }
              >
                <div
                  id="voice-button"
                  className="flex flex-col space-y-4 text-xl tracking-widest text-white"
                >
                  <button
                    onClick={() => handlePlayAudio(1)}
                    className="h-auto w-auto cursor-pointer rounded-full border-none p-3 hover:text-gray-300"
                    style={{ backgroundColor: data.attribute[0].hex_color }}
                  >
                    01
                  </button>
                  <button
                    onClick={() => handlePlayAudio(2)}
                    className="h-auto w-auto cursor-pointer rounded-full border-none p-3 hover:text-gray-300"
                    style={{ backgroundColor: data.attribute[0].hex_color }}
                  >
                    02
                  </button>
                  <button
                    onClick={() => handlePlayAudio(3)}
                    className="h-auto w-auto cursor-pointer rounded-full border-none p-3 hover:text-gray-300"
                    style={{ backgroundColor: data.attribute[0].hex_color }}
                  >
                    03
                  </button>
                  <button
                    onClick={() => handlePlayAudio(4)}
                    className="h-auto w-auto cursor-pointer rounded-full border-none p-3 hover:text-gray-300"
                    style={{ backgroundColor: data.attribute[0].hex_color }}
                  >
                    04
                  </button>
                </div>
                <audio id="audio" onEnded={handleAudioEnded} />
                <div className="language-menu ml-4 flex translate-y-4 flex-col space-y-10">
                  <button
                    onClick={() => setSelectedVoiceLanguage("jp")}
                    className={`${
                      selectedVoiceLanguage === "jp" && isDarkMode
                        ? "active rounded-l-md bg-gray-800 bg-opacity-30 px-2"
                        : ""
                    } ${
                      selectedVoiceLanguage === "jp" && !isDarkMode
                        ? "active rounded-l-md bg-gray-300 bg-opacity-30 px-2"
                        : ""
                    }`}
                  >
                    JP
                  </button>
                  <button
                    onClick={() => setSelectedVoiceLanguage("romaji")}
                    className={`${
                      selectedVoiceLanguage === "romaji" && isDarkMode
                        ? "active rounded-l-md bg-gray-800 bg-opacity-30 px-2"
                        : ""
                    } ${
                      selectedVoiceLanguage === "romaji" && !isDarkMode
                        ? "active rounded-l-md bg-gray-300 bg-opacity-30 px-2"
                        : ""
                    }`}
                  >
                    Rom
                  </button>
                  <button
                    onClick={() => setSelectedVoiceLanguage("en")}
                    className={`${
                      selectedVoiceLanguage === "en" && isDarkMode
                        ? "active rounded-l-md bg-gray-800 bg-opacity-30 px-2"
                        : ""
                    } ${
                      selectedVoiceLanguage === "en" && !isDarkMode
                        ? "active rounded-l-md bg-gray-300 bg-opacity-30 px-2"
                        : ""
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setSelectedVoiceLanguage("id")}
                    className={`${
                      selectedVoiceLanguage === "id" && isDarkMode
                        ? "active rounded-l-md bg-gray-800 bg-opacity-30 px-2"
                        : ""
                    } ${
                      selectedVoiceLanguage === "id" && !isDarkMode
                        ? "active rounded-l-md bg-gray-300 bg-opacity-30 px-2"
                        : ""
                    }`}
                  >
                    ID
                  </button>
                </div>
                {data ? (
                  <div
                    className={`content-box flex w-[36rem] max-w-xl items-center justify-center rounded-xl bg-opacity-30 p-2 text-2xl font-bold ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-200"
                    }`}
                  >
                    <div className="flex p-2">
                      {selectedVoice ? (
                        <p className="flex">
                          {selectedVoice[selectedVoiceLanguage]}
                        </p>
                      ) : (
                        <p className="flex">
                          {isAudioPlaying ? "Loading voice..." : ""}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <p>Loading data...</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <Link
        to="/idol"
        className={`scroll-to-top text-2xl" fixed bottom-5 left-6 float-left animate-pulse cursor-pointer  ${
          isDarkMode ? "" : "text-gray-800"
        }`}
      >
        {"<"} Back to Idol Page
      </Link>
    </div>
  );
};

export default IdolPageDetail;
