let darkModeEnabled = false;
const darkModeButton = document.getElementById("dark-mode");

darkModeButton.addEventListener("click", () => {
  darkModeEnabled = !darkModeEnabled;
  if (darkModeEnabled) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

const enableDarkMode = () => {
  document.documentElement.classList.add("dark-mode");
};

const disableDarkMode = () => {
  document.documentElement.classList.remove("dark-mode");
};
