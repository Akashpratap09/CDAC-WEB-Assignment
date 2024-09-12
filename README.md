# Responsive Login Page with API Integration

This is a simple responsive login page built using **HTML**, **CSS**, and **JavaScript**, which integrates with a dummy login API for authentication. The page includes form validation, "Remember Me" functionality, and appropriate success/error message handling based on API responses.

## Features

- **Responsive Design**: Works on both desktop and mobile devices.
- **Client-side Validation**: Ensures valid email format and checks for minimum password length.
- **API Integration**: Sends a POST request with login credentials to an external API.
- **Remember Me**: Option to remember the user's email.
- **Error Handling**: Displays success and error messages based on API responses.

## Demo

You can see a live demo of the project [https://github.com/Akashpratap09/CDAC-Web-Assignment.git](#)

## Getting Started

### Prerequisites

To run this project, you'll need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optionally, a code editor like **Visual Studio Code** if you wish to modify the code

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/login-page.git
    ```

2. Navigate to the project directory:

    ```bash
    cd login-page
    ```

3. Open the `index.html` file in your browser to view the login page.

    - Alternatively, if you are using a code editor, you can open the project in the editor and run the HTML file using the "Live Server" extension (for Visual Studio Code).

### Usage

1. Open the **login form** in your browser.

2. Enter your **email** and **password** in the respective fields.

3. Optionally, check the "Remember Me" box to save your email for future logins.

4. Click the **Login** button to submit the form. The following scenarios can occur:
   - If the login is successful, a success message will be displayed.
   - If the login fails (e.g., incorrect credentials), an error message will be shown.
   - If there's a network issue, a general error message will appear.

### Project Structure

```bash
login-page/
├── index.html          # The main HTML file
├── style.css           # The CSS file for styling the login form
└── script.js           # The JavaScript file for form validation and API interaction
