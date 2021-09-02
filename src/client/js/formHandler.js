function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('url').value;

  console.log(formText);

  console.log('::: Form Submitted :::');
  fetch('http://localhost:8081/api', {
    method: 'POST',
    credentials: 'omit', // to get rid of the cors errors
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userText: formText }),
  })
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById('results').innerHTML = res.agreement;
    });
}

export { handleSubmit };
