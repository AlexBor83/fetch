console.log('hello');

// отправка данных
// const sendData = (userData) => {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(userData),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// отправка данных
const sendData = (userData) => {
  const xhr = new XMLHttpRequest();
  xhr.open('post', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.send(JSON.stringify(userData));

  xhr.onload = function () {
    if (xhr.status === 404) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      alert(`Готово, получили ${xhr.response.length} байт`);
    }
  };

  xhr.onerror = function () {
    alert('Запрос не получен');
  };
};

// получение данных
const getData = () => {
  fetch('./db.json')
    .then((response) => response.json())
    .then((data) => {
      //    console.log(data)
      //   return data;
      sendData(data);
    })
    .catch((error) => console.log(error));
};

getData();
