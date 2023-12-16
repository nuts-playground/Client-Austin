fetch("http://localhost:3000/User")
  .then((res) => res.json())
  .then((data) => {
    let childElement;
    const wrap = document.querySelector("#wrap");
    for (let i = 0; i < data.length; i++) {
      //   container.insertAdjacentHTML(
      //     "afterbegin",
      //     `<p>${i}번째 유저 :  ${data[i].name}</p>`
      //   );
      childElement = document.createElement("p");
      childElement.className = `title${i}`;
      childElement.innerText = `${i + 1}번째 유저 : ${data[i].name}`;
      wrap.append(childElement);
    }
  });
