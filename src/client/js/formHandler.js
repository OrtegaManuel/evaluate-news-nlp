function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('userInput').value;

  if (!formText) {
    alert('Please enter a text');
  } else {
    console.log('::: Form Submitted :::');

    fetch('http://localhost:8081/api', {
      method: 'POST',
      credentials: 'omit',
      cache: 'no-cache',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ userText: formText }),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById('results').innerHTML = res.agreement;
      });
  }
}
export { handleSubmit };
