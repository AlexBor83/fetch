console.log('hello');


// отправка данных
const sendData = (userData) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(error => console.log(error))
  };

// получение данных
const getData = () => {
  fetch('./db.json')
    .then((response) => response.json())
    .then((data) => {
    //    console.log(data)
    //   return data;
    sendData(data)
    })
    .catch(error => console.log(error))
};

getData();

