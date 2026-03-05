# Playlist App Automation Testing

This project contains automated UI tests for the [Playlist App](https://vite-react-alpha-lemon.vercel.app/).

## Tech Stack

- **Framework:** Playwright
- **Language:** JavaScript
- **Code Quality:** ESLint, Prettier

## Test Coverage

1. **Search Functionality:** Verifies that tracks are correctly filtered by the search input.
2. **Add Track:** Verifies that clicking the "+" button adds the track to the user's playlist.
3. **Total Duration:** Calculates the expected duration in seconds and compares it with the UI result.

## Setup Instructions

1. Clone the repository to your local machine.
2. Install all necessary dependencies using the command: `npm install`

## Running Tests

1. To run all tests in headless mode (background): `npx playwright test`
2. To run tests with a visible browser (headed): `npx playwright test --headed`
3. To see the detailed HTML report after tests: `npx playwright show-report`

## Code Quality

To check the code for linting errors and formatting, use: `npx eslint .`
