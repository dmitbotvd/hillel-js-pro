async function foo() {
  let url = 'http://jsonplaceholder.typicode.com/users';
  let responce = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  let commits = await responce.json();
  console.log(commits);
}
foo();