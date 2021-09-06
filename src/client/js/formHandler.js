function handleSubmit(event) {
  event.preventDefault();

  // check what url was put into the form field
  let formText = document.getElementById('userInput').value;

  if (!formText) {
    alert('Please enter a valid URL');
  } else {
    console.log('::: Form Submitted :::');

    fetch('http://localhost:8081/api', {
      method: 'POST',
      credentials: 'same-origin',
      cache: 'no-cache',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ userInput: formText }),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById('irony').innerHTML =
          'The irony is: ' + res.irony.toLowerCase();
        document.getElementById('confidence').innerHTML =
          'The confidence score is: ' + res.confidence;
        document.getElementById('agreement').innerHTML =
          'The agreement is: ' + res.agreement.toLowerCase();
      });
  }
}
export { handleSubmit };
