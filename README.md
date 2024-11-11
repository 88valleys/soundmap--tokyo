# Soundmap Tokyo

Soundmap Tokyo is a one-page React application that features searching for livehouses in Tokyo by location, genre, and keyword. Users can also add livehouses to the API by filling in a form.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [API](#api)
- [Dependencies](#dependencies)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/88valleys/soundmap-tokyo.git
    cd soundmap-tokyo
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Setup

1. Create a `.env` file in the root directory and add any necessary environment variables.

2. Start the development server:
    ```sh
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Filter livehouses by title. Future updates will include filtering by genre, location, or title.
- Livehouses display instantly when searching by title.
- Click on a livehouse to view more details.
- Add new livehouses by filling in the form provided.

## API

The application uses a custom API to fetch livehouse data. Below are the details of the API endpoints:

- **Base URL**: `https://fathomless-river-41474-f3672769a018.herokuapp.com/api/v1/livehouses`

### Endpoints

1. **Get all livehouses**
    - **URL**: `/livehouses`
    - **Method**: `GET`
    - **Description**: Retrieves a list of all livehouses.
    - **Response**:
      ```json
      [
        {
          "id": 1,
          "name": "SANGENJAYA HEAVEN'S DOOR",
          "address": "〒154-0024 Tokyo, Setagaya City, Sangenjaya, 1 Chome−33−19 B1F",
          "picture": "https://example.com/image.jpg"
          "hours": {
            "friday": "18:00 - 03:00",
            "monday": "18:00 - 02:00",
            "sunday": "Closed",
            "tuesday": "18:00 - 02:00",
            "saturday": "18:00 - 03:00",
            "thursday": "18:00 - 02:00",
            "wednesday": "18:00 - 02:00"
          },
          "capacity": 200,
          "website_url": "https://heavens-door-music.com/",
          "contact_email": "info@heavensdoor.com",
          "nearest_station": "Sangenjaya Station",
          "event_calendar_url": "https://heavens-door-music.com/schedule/",
          "genres": [ "Punk", "Rock", "Metal" ],
          "equipment": [ "Microphones", "PA System", "Drum Kit" ],
        },
        ...
      ]
      ```

2. **Add a livehouse**
    - **URL**: `/livehouses`
    - **Method**: `POST`
    - **Parameters**:
      - `name` (string): The name of the livehouse.
      - `address` (string): The address of the livehouse.
      - `genres` (array): Genres featured in the livehouse.
      - `nearest_station` (string): The closest train station to the livehouse.
      - `picture` (string): The URL with a picture link to the livehouse.
    - **Description**: Adds a new livehouse to the database.
    - **Response**:
      ```json
      {
        "id": 2,
        "name": "New Livehouse",
        "address": "456 Tokyo St.",
        "description": "A new livehouse in Tokyo.",
        "image": "https://example.com/new-image.jpg"
      }
      ```

### API Format

This is the format of the API response for a livehouse:

```json
{
  "id": 39,
  "title": "SANGENJAYA HEAVEN'S DOOR",
  "address": "〒154-0024 Tokyo, Setagaya City, Sangenjaya, 1 Chome−33−19 B1F",
  "picture": "https://i.imghippo.com/files/oKi3372cRs.png",
  "hours": {
    "friday": "18:00 - 03:00",
    "monday": "18:00 - 02:00",
    "sunday": "Closed",
    "tuesday": "18:00 - 02:00",
    "saturday": "18:00 - 03:00",
    "thursday": "18:00 - 02:00",
    "wednesday": "18:00 - 02:00"
  },
  "capacity": 200,
  "website_url": "https://heavens-door-music.com/",
  "contact_email": "info@heavensdoor.com",
  "nearest_station": "Sangenjaya Station",
  "event_calendar_url": "https://heavens-door-music.com/schedule/",
  "genres": [
    "Punk",
    "Rock",
    "Metal"
  ],
  "equipment": [
    "Microphones",
    "PA System",
    "Drum Kit"
  ],
  "created_at": "2024-11-03T08:41:59.922Z",
  "updated_at": "2024-11-03T08:41:59.922Z"
}
```

## Dependencies

- React: ^18.2.0
- Bootstrap: ^5.4.1
- Choices.js: ^11.0.2
- jQuery: ^3.7.1
- Select2: ^4.1.0-rc.0
- Select2 Bootstrap 5 Theme: ^1.3.0

## Screenshots

![Home Page](path/to/homepage-screenshot.png)
*Description of the home page screenshot.*

![Livehouse List](path/to/livehouse-list-screenshot.png)
*Description of the livehouse list screenshot.*

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
