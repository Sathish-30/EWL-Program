const root = document.getElementById("root");
const fetchinfo = () => {
  const promises = [];
  for (let i = 1; i <= 20; i++) {
    const url = `https://randomuser.me/api/?results=${i}`;
    //Fetched informations are pushed to promises
    promises.push(fetch(url).then((res) => res.json()));
  }
};

promise.all(promises).then((results) => {
  const personInfo = results.map((data) => ({
    name: data.name.first,
    email: data.email,
    location: data.location.city,
    image: data.picture.medium,
  }));
  displayInfo(personInfo);
});
