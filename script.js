document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Pobierz imię użytkownika
    let userName = document.getElementById("nameInput").value;

    // Sprawdź, czy pole nie jest puste
    if (userName.trim() !== "") {
      // Wyświetl powitanie
      document.getElementById("greetingMessage").textContent =
        "Witaj, " + userName + "!";
    } else {
      document.getElementById("greetingMessage").textContent =
        "Proszę podać swoje imię.";
    }

    // Wyczyść pole tekstowe
    document.getElementById("nameInput").value = "";
  });
