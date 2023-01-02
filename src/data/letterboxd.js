import letterboxd from "letterboxd";

const letterboxdClient = () => {
  let list = [];

  letterboxd("jesszhu")
    .then((items) => list.push(...items.slice(0, 3)))
    .catch((error) => console.log(error));
    
  return list;
};

export default letterboxdClient;