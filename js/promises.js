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
})();
