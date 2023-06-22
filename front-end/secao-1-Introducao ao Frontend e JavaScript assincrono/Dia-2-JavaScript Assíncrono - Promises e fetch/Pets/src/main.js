const getDogButton = document.querySelector("#random-dog");
const getCatButton = document.querySelector("#random-cat");
const surpriseMeButton = document.querySelector("#surprise-me");

const petImage = document.querySelector("#random-pet-image");

getDogButton.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.message;

      petImage.src = petURL;
    });
});

getCatButton.addEventListener("click", () => {
   fetch("https://api.thecatapi.com/v1/images/search")
     .then((res) => res.json())
     .then(([data]) => {
       const petURL = data.url;

       petImage.src = petURL;
     });
 });

 surpriseMeButton.addEventListener("click", () => {
  const dogPromise = fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => data.message);

  const catPromise = fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => data[0].url);

  Promise.all([dogPromise, catPromise])
    .then((results) => {
      const randomIndex = Math.floor(Math.random() * results.length);
      const petURL = results[randomIndex];
      petImage.src = petURL;
    });
});
