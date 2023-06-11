import React, { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";

const ShowData = ({ isDarkMode }) => {
  const [data, setData] = useState([]);
  const [endpoint, setEndpoint] = useState("");
  const [visibleData, setVisibleData] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [sortTerm, setSortTerm] = useState("");
  const [isSortDescending, setIsSortDescending] = useState(true);

  useEffect(() => {
    const url = window.location.href;
    const path = url.split("/").pop();

    if (path === "card") {
      setEndpoint("card");
    } else if (path === "idol") {
      setEndpoint("idol");
    }
  }, []);

  const uppercaseEndpoint = endpoint.toUpperCase();

  const [filteredData, setFilteredData] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [filteredAndSortedData, setFilteredAndSortedData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredAndSortedVisibleData, setFilteredAndSortedVisibleData] =
    useState([]);

  useEffect(() => {
    if (endpoint) {
      // Panggil API sesuai endpoint yang diinginkan
      fetch(`https://idoly-pride-api.vercel.app/api/${endpoint}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setVisibleData(data.slice(0, 8));
          setFilteredAndSortedVisibleData(data.slice(0, 8));
          setFilteredData(data);
          setFilteredAndSortedData(data);

          // Ambil opsi filter dari data
          const options = getFilterOptions(data);
          setFilteredOptions(options);
        })
        .catch((error) => console.log(error));
    }
  }, [endpoint]);

  const getFilterOptions = (data) => {
    // Logic untuk mengambil opsi filter dari data
    // Misalnya, jika ingin mengambil opsi "type" dari data endpoint "card":
    if (endpoint === "card") {
      const types = new Set();
      data.forEach((item) => {
        types.add(item.type);
      });
      return Array.from(types);
    } else if (endpoint === "idol") {
      const groups = new Set();
      const almaMaters = new Set();
      data.forEach((item) => {
        groups.add(item.detail[0].group);
        almaMaters.add(item.detail[0].almameter);
      });
      return {
        group: Array.from(groups),
        almaMater: Array.from(almaMaters),
      };
    }
    return {};
  };

  const handleLoadMore = () => {
    const newData = data.slice(visibleData.length, visibleData.length + 8);
    const newSaringData = data.slice(
      filteredAndSortedVisibleData.length,
      filteredAndSortedVisibleData.length + 8
    );

    if (newData.length > 0) {
      setVisibleData((prevData) => [...prevData, ...newData]);
    }

    if (visibleData.length + newData.length >= data.length) {
      setShowMore(false);
    }
    if (newSaringData.length > 0) {
      setFilteredAndSortedVisibleData((prevData) => [
        ...prevData,
        ...newSaringData,
      ]);
    }

    if (
      filteredAndSortedVisibleData.length + newSaringData.length >=
      data.length
    ) {
      setShowMore(false);
    }

    if (visibleData.length == data.length) {
      setShowMore(true);
    }
  };

  const filterData = (filterTerm) => {
    if (filterTerm === "") {
      setVisibleData(data);
      setFilteredData(data);
      setFilteredAndSortedData(data);
      setIsFiltered(false);
    } else {
      const filtered = data.filter((item) => {
        let match = false;

        if (endpoint === "card") {
          const title = item.title.toLowerCase();
          const name = item.name.toLowerCase();
          const type = item.type.toLowerCase();
          const ability = item.ability.toLowerCase();
          const filter = filterTerm.toLowerCase();
          match =
            title.includes(filter) ||
            name.includes(filter) ||
            type.includes(filter) ||
            ability.includes(filter);
        } else if (endpoint === "idol") {
          const name = item.name.toLowerCase();
          const group = item.detail[0].group.toLowerCase();
          const apparent_age = item.detail[0].apparent_age.toLowerCase();
          const almameter = item.detail[0].almameter.toLowerCase();
          const filter = filterTerm.toLowerCase();
          match =
            name.includes(filter) ||
            group.includes(filter) ||
            almameter.includes(filter) ||
            apparent_age.includes(filter);
        }

        return match;
      });

      setFilteredData(filtered);
      setVisibleData(filtered.slice(0, 8));
      setFilteredAndSortedData(filtered);
      setIsFiltered(true);
    }
  };

  useEffect(() => {
    // Reset filtered data when data changes
    setFilteredData(data);
    setVisibleData(data.slice(0, 8));
    setFilteredAndSortedData(data);
    setIsFiltered(false);
  }, [data]);

  const sortData = (sortTerm) => {
    setSortTerm(sortTerm);
  };

  useEffect(() => {
    if (sortTerm !== "") {
      const sorted = [...filteredAndSortedData];
      sorted.sort((a, b) => {
        let compareResult = 0;

        if (endpoint === "card") {
          // Lakukan logika sorting berdasarkan endpoint "card"
          if (sortTerm === "name") {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            compareResult = nameA.localeCompare(nameB);
          }
        } else if (endpoint === "idol") {
          // Lakukan logika sorting berdasarkan endpoint "idol"
          const detailA = a.detail[0];
          const detailB = b.detail[0];

          if (sortTerm === "name") {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            compareResult = nameA.localeCompare(nameB);
          } else if (sortTerm === "age") {
            const ageA = parseInt(detailA.age);
            const ageB = parseInt(detailB.age);
            compareResult = ageA - ageB;
          } else if (sortTerm === "height") {
            const heightA = parseInt(detailA.height);
            const heightB = parseInt(detailB.height);
            compareResult = heightA - heightB;
          } else if (sortTerm === "weight") {
            const weightA = parseInt(detailA.weight);
            const weightB = parseInt(detailB.weight);
            compareResult = weightA - weightB;
          } else if (sortTerm === "threesize") {
            const [bustA, waistA, hipA] = detailA.threesize
              .split("/")
              .map((size) => parseInt(size));
            const [bustB, waistB, hipB] = detailB.threesize
              .split("/")
              .map((size) => parseInt(size));
            compareResult = bustA - bustB || waistA - waistB || hipA - hipB;
          }
        }

        // Jika ingin descending, ubah tanda perbandingan hasil menjadi negatif
        if (!isSortDescending) {
          compareResult = -compareResult;
        }

        if (compareResult > 0) {
          return 1;
        } else if (compareResult < 0) {
          return -1;
        } else {
          return 0;
        }
      });

      setFilteredData(sorted);
      setVisibleData([...sorted.slice(0, 8)]);
    }
  }, [sortTerm, isSortDescending]);

  const toggleSortDirection = () => {
    setIsSortDescending(!isSortDescending);
    
    if (visibleData.length == data.length) {
      setShowMore(true);
    }
  };

  return (
    <div
      className={`pt-10 ${
        isDarkMode ? "bg-gray-800 bg-opacity-60" : "bg-gray-800 bg-opacity-30"
      }`}
    >
      <h1
        className="text-7xl tracking-widest"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        {uppercaseEndpoint}
      </h1>

      <p
        className="tracking-widest"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Total Data: {data.length}
      </p>
      <div className="m-10 flex flex-wrap items-center justify-center gap-8">
        {/* Tambahkan komponen Search */}
        <Search onSearch={filterData} />

        <Filter
          options={filteredOptions}
          onFilter={filterData}
          isDarkMode={isDarkMode}
          groupOptions={filteredOptions.group}
          almaMaterOptions={filteredOptions.almaMater}
        />
        <div className="flex flex-row space-x-2">
          <Sort
            options={["name", "age", "height", "weight", "threesize"]}
            onSort={sortData}
          />

          {/* Tambahkan tombol handler untuk mengatur arah sorting */}
          <button
            className="text-md w-auto rounded-full border-2 border-blue-600 bg-gray-200 p-1 font-bold text-blue-600 shadow-md hover:border-gray-200 hover:bg-blue-600 hover:text-gray-200"
            onClick={toggleSortDirection}
          >
            <span>{isSortDescending ? " ▼" : " ▲"}</span>
          </button>
        </div>
      </div>

      <div className="m-10 flex flex-wrap justify-center gap-8">
        {data ? (
          <>
            {visibleData.map((item, index) => (
              <Card
                key={`${item._id || item.id}-${index}`}
                data={item}
                endpoint={endpoint}
              />
            ))}
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>

      {showMore && visibleData.length < data.length && (
        <button
          className="mb-10 w-auto animate-bounce rounded-xl border-4 border-blue-600 bg-gray-200 p-4 text-2xl font-bold text-blue-600 shadow-md duration-1000 hover:border-gray-200 hover:bg-blue-600 hover:text-gray-200"
          onClick={handleLoadMore}
        >
          ▼
        </button>
      )}
    </div>
  );
};

export default ShowData;
