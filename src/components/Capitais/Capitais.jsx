import "/Users/danyelaramos/Documents/development/react/state/src/components/Capitais/Capitais.css";
import { useState } from "react";

function Capitais() {
  const capitaisBrasil = [
    "Aracaju",
    "Belém",
    "Belo Horizonte",
    "Boa Vista",
    "Brasília",
    "Campo Grande",
    "Cuiabá",
    "Curitiba",
    "Florianópolis",
    "Fortaleza",
    "Goiânia",
    "João Pessoa",
    "Macapá",
    "Maceió",
    "Manaus",
    "Natal",
    "Palmas",
    "Porto Alegre",
    "Porto Velho",
    "Recife",
    "Rio Branco",
    "Rio de Janeiro",
    "Salvador",
    "São Luís",
    "São Paulo",
    "Teresina",
    "Vitória",
  ];

  const [list, setList] = useState(capitaisBrasil);
  const [isVisible, setIsVisible] = useState(true);

  function handleCleanClick() {
    setList([]);
  }

  function handleReprintClick() {
    setList([...capitaisBrasil]);
    setIsVisible(true);
  }

  function handleCountryClick() {
    let newArray = ["Brazil", ...capitaisBrasil];
    setList(newArray);
    setIsVisible(true);
  }

  function handleOrderClick() {
    let newArray = [...capitaisBrasil];
    newArray.sort();
    setList(newArray);
    setIsVisible(true);
  }

  function handleCapSumClick() {
    let newArray = [...capitaisBrasil];
    alert(`${newArray.length} cidades!`);
  }

  function handleShowHideClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="capitaisContainer">
      <h1>2. Capitais</h1>
      {isVisible && (
        <div className="list">
          {list.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
      <button onClick={handleCleanClick}> Clean List </button>
      <button onClick={handleReprintClick}> Reprint List </button>
      <button onClick={handleCountryClick}> Print Country Name </button>
      <button onClick={handleOrderClick}> Order by Alphabetic Order </button>
      <button onClick={handleCapSumClick}> Total Number of Capitals </button>
      <button onClick={handleShowHideClick}> Show/Hide List </button>
    </div>
  );
}

export default Capitais;
