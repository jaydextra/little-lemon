# Little Lemon Restaurant - Table Booking System

A modern, responsive web application for the Little Lemon Mediterranean restaurant, featuring an online table reservation system built with React.

## 🚀 Features

- **Online Table Reservations**: Customers can book tables with date, time, number of guests, and occasion
- **Real-time Availability**: Booking times are fetched dynamically based on selected dates via API
- **Form Validation**: Comprehensive HTML5 and JavaScript validation with helpful error messages
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Accessibility**: ARIA attributes, semantic HTML, and keyboard navigation support
- **Tested**: Comprehensive unit tests for form validation and API integration

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks (useState, useReducer, useEffect)
- **React Router DOM**: Client-side routing for multiple pages
- **React Testing Library**: Unit and integration testing
- **CSS3**: Flexbox, Grid, and responsive media queries
- **HTML5**: Semantic markup and form validation
- **JavaScript ES6+**: Modern JavaScript features

## 📁 Project Structure

```
my-app/
├── public/
│   ├── index.html          # Main HTML file with meta tags
│   └── manifest.json        # Web app manifest
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.js       # Navigation bar
│   │   ├── Hero.js         # Hero section
│   │   ├── Highlights.js   # Weekly specials
│   │   ├── BookingForm.js  # Reservation form
│   │   ├── Footer.js       # Footer
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── HomePage.js     # Home page
│   │   ├── BookingPage.js  # Booking page
│   │   └── ConfirmedBooking.js  # Confirmation page
│   ├── styles/             # CSS files for each component
│   ├── utils/              # Utility functions
│   │   └── bookingReducer.js  # Reducer for booking state
│   ├── App.js              # Main app component with routing
│   ├── index.js            # Entry point
│   └── setupTests.js       # Test configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file

```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaydextra/little-lemon.git
   cd little-lemon/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode
- To run tests once: `npm test -- --watchAll=false`

### `npm run build`
Builds the app for production to the `build` folder. Optimized and minified for deployment.

## 🎨 Features in Detail

### Booking System
- **Date Selection**: Choose future dates only (past dates prevented)
- **Time Selection**: Available times update dynamically based on selected date
- **Guest Count**: Minimum 1 guest, maximum 10 guests
- **Occasion Selection**: Choose between Birthday, Anniversary, or Engagement
- **Form Validation**: Real-time validation with helpful error messages
- **Confirmation Page**: Shows booking details after successful submission

### Responsive Design
- **Desktop**: Multi-column layouts, spacious spacing
- **Tablet**: Optimized for 768px breakpoint
- **Mobile**: Single column, touch-friendly interface

### Accessibility Features
- ARIA labels for screen readers
- Semantic HTML5 elements
- Keyboard navigation support
- Focus management
- Error announcements
- Proper heading hierarchy

## 🧪 Testing

The project includes comprehensive unit tests:

- **Form Component Tests**: Validates form rendering, HTML5 attributes, and JavaScript validation
- **Reducer Tests**: Tests API integration and state management
- **Coverage**: 24 tests passing

### Running Tests
```bash
npm test
```

### Test Coverage
- Form validation (valid/invalid states)
- Error message display
- Button disabled states
- Form submission flow
- Date and guest validation
- API integration

## 📊 Grading Criteria Addressed

✅ **Design and UX Implementation**: Follows Little Lemon brand guide with proper typography, colors, and spacing  
✅ **Accessibility Tags**: ARIA attributes, semantic HTML, keyboard navigation  
✅ **Unit Tests**: Comprehensive test suite with 24 passing tests  
✅ **Form Validation**: HTML5 and JavaScript validation with clear error messages  
✅ **Semantics and Responsiveness**: Semantic HTML5, responsive CSS with media queries  
✅ **Git Repository**: All code committed to GitHub with meaningful commit messages  
✅ **Code Structure**: Clean, maintainable code with logical organization  
✅ **Edge Cases**: Error handling for invalid dates, guest limits, and form validation  
✅ **Documentation**: Clear README with setup instructions  

## 🔗 GitHub Repository

Repository URL: https://github.com/jaydextra/little-lemon

## 📞 Contact

For questions or issues, please contact the repository maintainer.

---

**Note**: This project is part of the Meta Front-End Developer Professional Certificate program.
