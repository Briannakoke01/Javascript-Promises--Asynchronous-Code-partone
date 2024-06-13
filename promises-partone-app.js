let favNumber = 5;
    let baseURL = "http://numbersapi.com";

    // 1. Fetch fact about a favorite number
    $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
      console.log(data);
      $("body").append(`<p>${data.text}</p>`);
    });

    // 2. Fetch facts about multiple favorite numbers
    let favNumbers = [7, 11, 22];
    $.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
      console.log(data);
      for (let num in data) {
        if (data.hasOwnProperty(num)) {
          $("body").append(`<p>${data[num]}</p>`);
        }
      }
    });

    // 3. Fetch 4 facts about the favorite number
    Promise.all(
      Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
      })
    ).then(facts => {
      facts.forEach(data => {
        $("body").append(`<p>${data.text}</p>`);
      });
    });