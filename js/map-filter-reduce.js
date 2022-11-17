(() => {
  const users = [
    {
      id: 1,
      name: "ryan",
      email: "ryan@codeup.com",
      languages: ["clojure", "javascript"],
      yearsOfExperience: 5,
    },
    {
      id: 2,
      name: "luis",
      email: "luis@codeup.com",
      languages: ["java", "scala", "php"],
      yearsOfExperience: 6,
    },
    {
      id: 3,
      name: "zach",
      email: "zach@codeup.com",
      languages: ["javascript", "bash"],
      yearsOfExperience: 7,
    },
    {
      id: 4,
      name: "fernando",
      email: "fernando@codeup.com",
      languages: ["java", "php", "sql"],
      yearsOfExperience: 8,
    },
    {
      id: 5,
      name: "justin",
      email: "justin@codeup.com",
      languages: ["html", "css", "javascript", "php"],
      yearsOfExperience: 9,
    },
  ];

  // TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

  const threeLanguages = users.filter((user) => user.languages.length >= 3);

  // TODO: Use .map to create an array of strings where each element is a user's email address

  const emails = users.map((user) => user.email);

  // TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

  const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);

  // TODO: Use .reduce to get the longest email from the list of users.

  const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
      return user.email;
    } else {
      return longest;
    }
  }, "");

  // TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

  const instructors = users.reduce((names, user) => {
    return names + user.name + ", ";
  }, "Your instructors are: ");

  // TODO: Use .reduce to get the unique list of languages from the list of users.

  const languages = users.reduce((uniqueLanguages, user) => {
    user.languages.forEach((language) => {
      if (!uniqueLanguages.includes(language)) {
        uniqueLanguages.push(language);
      }
    });
    return uniqueLanguages;
  }, []);
})();
