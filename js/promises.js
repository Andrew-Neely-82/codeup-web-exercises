(() => {
  `use strict`;
  const lastCommit = (username) => {
    return fetch(`https://api.github.com/users/${username}/events`, {
      headers: {
        Authorization: xerxes,
      },
    })
      .then((response) => response.json())
      .then((data) => data[0].created_at);
  };

  lastCommit(`andrew-neely-82`).then((data) => console.log(data));

  const wait = (num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num);
      }, num);
    });
  };

  // * bonus
  wait(1000).then((num) => console.log(`You'll see this after ${num / 1000} second`));
  wait(2000).then((num) => console.log(`You'll see this after ${num / 1000} seconds`));
  wait(3000).then((num) => console.log(`You'll see this after ${num / 1000} seconds`));
  wait(4000).then((num) => console.log(`You'll see this after ${num / 1000} seconds`));
  wait(5000).then((num) => console.log(`You'll see this after ${num / 1000} seconds`));
})();
