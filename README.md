# React Native Mobile Automation – End-to-End Tests

## Repository Scope

This repository contains only the mobile automation test framework.

The React Native application under test is maintained in a separate repository and is treated as an external system under test (SUT).

This separation reflects real-world team structures where application development and test automation are owned and versioned independently.

## Application Under Test (AUT)

The React Native application under test is maintained in a separate repository:

https://github.com/SpataruMihaela/feeld-qa-sample-app

This automation project treats the application as an external system under test (SUT),
reflecting real-world team ownership and deployment boundaries.

## Scenario

This project was created to demonstrate how to design, implement, and maintain a comprehensive automation test suite for a React Native mobile application.

A reasonably sized React Native application (more than five screens) is used to showcase realistic end-to-end testing, automation architecture, and QA engineering judgement applied to a mobile context.

---

## React Native Project

This repository contains:

- A React Native mobile application
- A full end-to-end automation test suite targeting the application

The project demonstrates:

- Practical mobile automation using a real application
- Clean separation between application code and test code
- Stable Android automation practices
- Realistic user journeys tested end to end

---

## How to Set Up and Run the React Native App

### Prerequisites

- Node.js (LTS)
- npm
- Android Studio
- Android Emulator (Android 13 recommended)
- Expo CLI

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npx expo start -c
npx expo run:android
```

---

## Application Overview

The application simulates a simplified social and discovery experience.  
It includes the following screens:

- Welcome screen (application entry point)
- Discovery screen (browse other user profiles)
- Profile screen (view other users)
- Likes screen (view liked profiles)
- My Profile screen
- Edit Profile screen
- Settings screen (logout)

Navigation is implemented using React Navigation, and application state is managed using React Context.

---

## Automation Tests

### Areas Covered by Automation

The automation suite covers the following user journeys:

1. Navigation from Welcome to Discovery
2. Opening a profile from the Discovery screen
3. Liking another user’s profile
4. Unliking a previously liked profile
5. Updating the profile name from My Profile
6. Verifying avatar initial update after profile name change
7. Cancelling the photo picker without changing profile state
8. Logging out from Settings
9. Smoke tests covering critical application paths

Tests are designed to be:

- Independent
- Deterministic
- Repeatable
- Explicit about navigation and application state

---

## Automation Frameworks Considered

The following automation frameworks were evaluated:

- Detox
- Cypress
- Playwright
- Appium with WebdriverIO

---

## Selected Automation Framework and Rationale

### Appium with WebdriverIO

This framework was selected for the following reasons.

**Pros**

- Industry-standard solution for mobile automation
- Strong Android support via UiAutomator2
- Flexible locator strategies using accessibility identifiers
- Full control over navigation and device state
- Suitable for scaling to real devices or device farms

**Cons**

- Slower execution compared to unit or integration tests
- Emulator stability must be carefully managed
- Requires explicit handling of application state between tests

For realistic end-to-end mobile testing, these trade-offs are acceptable.

---

## How to Run Automation Tests

### Prerequisites

- Android Emulator running
- Appium server running

```bash
appium
```

### Run all end-to-end tests

```bash
npx wdio run config/wdio.local.android.conf.ts
```

### Run a single end-to-end test

```bash
npx wdio run config/wdio.local.android.conf.ts --spec test/specs/e2e/my-profile.update-name.e2e.spec.ts
```

### Run smoke tests only

```bash
npx wdio run config/wdio.local.android.conf.ts --spec test/specs/smoke.spec.ts
```

---

## Automation Architecture

```
test/
├── pages/          Page Object Model
├── helpers/        Navigation and state helpers
├── specs/
│   ├── e2e/        End-to-end test cases
│   └── smoke.spec.ts
├── data/           Test data
└── hooks/          Global hooks
```

### Key Design Decisions

- Page Object Model applied consistently
- Explicit navigation helpers for predictable test starts
- Global cleanup after each test to reset application state
- Accessibility-first selector strategy
- maxInstances set to 1 to ensure Android emulator stability

---

## AI Usage and Judgement

### Was AI used?

Yes.

### How AI was used

AI was used as a supporting tool during development for:

- Improving naming conventions and consistency
- Assisting with documentation structure and clarity

All AI-generated suggestions were reviewed manually and adapted to the actual behaviour of the application and emulator.

### Where AI Was Most Helpful

- Improving documentation quality
- Highlighting potential test design improvements

### Where AI Was Least Helpful

- Debugging Appium and UiAutomator2 crashes
- Emulator instability issues
- Timing-related Android-specific failures

These areas required manual debugging, logcat analysis, and practical experience.

---

## Improvements and Next Steps

Potential future enhancements include:

- Execution on real devices
- Visual regression testing
- Performance monitoring
- Improved retry and resilience strategies
- Test data seeding and environment separation

---
