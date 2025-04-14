# COVID-19 API

## Overview
The COVID-19 API is a web application designed to provide real-time statistics and information about the COVID-19 pandemic. It fetches data from a reliable API and displays it in a user-friendly format, allowing users to stay informed about the current situation regarding COVID-19.

## Features
- **Real-time Data**: Fetches and displays the latest COVID-19 statistics including total confirmed cases, active cases, and death counts.
- **User -Friendly Interface**: Designed with a clean and responsive layout using Bootstrap for easy navigation and accessibility.
- **Informative Sections**: Provides information on symptoms, prevention methods, and how the virus spreads.

## Live Demo
You can view the live application at the following link: [COVID-19 Tracker](https://covid-19-api-blond.vercel.app/)

## Technologies Used
- **HTML**: For structuring the web pages.
- **CSS**: For styling the application.
- **JavaScript**: For fetching data from the API and updating the UI dynamically.
- **Bootstrap**: For responsive design and layout.

## API Integration
The application uses the following API to fetch COVID-19 statistics:
- **API Endpoint**: `https://covid-19-statistics.p.rapidapi.com/reports/total`
- **API Key**: Make sure to replace the API key in the `script.js` file with your own if you are running the application locally.

### Example of Fetching Data
```javascript
const url = "https://covid-19-statistics.p.rapidapi.com/reports/total";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "YOUR_API_KEY_HERE",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

function fetchData() {
  fetch(url, options)
    .then(response => response.json())
    .then(data => display(data.data))
    .catch(error => console.error(error));
}
```

## Installation
To run the application locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/covid-19-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd covid-19-api
   ```
3. Open `index.html` in your web browser.

## Contribution
Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For any inquiries or feedback, please reach out to [rushabhgadhiya9102@gmail.com]. 

---

This README provides a comprehensive overview of the COVID-19 API project, including its features, technologies used, and instructions for installation and usage.
