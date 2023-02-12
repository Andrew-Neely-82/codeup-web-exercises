(() => {
  $(document).ready(() => {
    const meta = {
      head: `
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./css/style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      <title>Coming Soon</title>
      `,
    };
    const bodyContainers = {
      logo: `<div class="container-logo"></div>`,
      footer: `<div class="container-footer"></div>`,
      main: `<div class="container-main-content"></div>`,
    };
    const bodyHtml = {
      logo: `<span class="logo">Logo</span>`,
      main: `
      <span class="heading">COMING SOON</span>
      <hr class="line" />
      <span class="days">35 days left</span>`,
      footer: `<span class="footer-text">Powered by&nbsp;<a href="#" class="link">w3.css</a></span>`,
    };
    $(`head`).append(meta.head);
    $(`body`).append(bodyContainers.logo);
    $(`body`).append(bodyContainers.main);
    $(`body`).append(bodyContainers.footer);
    $(`.container-logo`).append(bodyHtml.logo);
    $(`.container-main-content`).append(bodyHtml.main);
    $(`.container-footer`).append(bodyHtml.footer);
  });
})();
