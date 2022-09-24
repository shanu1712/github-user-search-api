console.log('Hello!');

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const search = document.getElementById('search').value;
  const originalname = search.split(' ').join(''); //removing the spaces and joining the string
  //alert(originalname);
  document.getElementById('result').innerHTML = '';
  console.log(search); /////checking that the value is getting printed or not
  //fetch("https://api.github.com/users"+search);
  fetch('https://api.github.com/users/' + originalname)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);

      document.getElementById(
        'result'
      ).innerHTML = `<a target="_blank" href="https://www.github.com/${originalname}"><img src="${data.avatar_url}"/></a>
     <l1>${data.name}</l1>
     <li>${data.bio}</li>`;
      /// targetting with anchor tag and displai=ying the search result for the users in the next window
    });
});

////////
// with async await
/*
async function fetchData(){
  const response=await fetch("https://api.github.com/users/")
  return response
}

fetchData().then(function(response){
  return response.json()
}).then(function(response){
  console.log(response)
})
*/
