# BhuDristi
BhuDrishti AI is a browser-based land record digitization and validation platform featuring record management, duplicate detection, anomaly identification, GIS mapping, and audit tracking to support transparent and efficient land administration.

# 🌍 BhuDrishti AI
### Intelligent Land Record Digitization, Validation & GIS Intelligence

**BhuDrishti AI** is a browser-based web application designed to support the digitization, organization, validation, and monitoring of land records.

The project aims to address challenges associated with traditional land record management, including duplicate entries, inconsistent information, missing fields, suspected data anomalies, and difficulties in tracking record changes.

By combining a user-friendly dashboard, land record management tools, validation workflows, and Geographic Information System (GIS) mapping, BhuDrishti AI presents a technology-driven approach to improving land administration.

> **Project status:** Frontend prototype. The current implementation uses HTML, CSS, JavaScript, and browser local storage. A production AI backend and automated OCR pipeline are not included in the current build.

---

## 📌 Table of Contents

- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Data Storage](#-data-storage)
- [Current Limitations](#-current-limitations)
- [Future Enhancements](#-future-enhancements)
- [Use Cases](#-use-cases)
- [Contributing](#-contributing)
- [Disclaimer](#-disclaimer)
- [License](#-license)

---

## 🎯 Problem Statement

Land records are essential for property ownership, land administration, agricultural planning, and legal verification.

However, managing land records can be challenging when information is stored across different documents, formats, and administrative systems.

Common challenges include:

- Paper-based and legacy land records that are difficult to organize.
- Missing or inconsistent information in land record entries.
- Duplicate records that may require further investigation.
- Potential discrepancies in survey numbers, ownership details, or land area.
- Difficulty identifying records that require manual verification.
- Limited visibility into record changes and administrative activity.
- Challenges in connecting land records with geographical information.

These issues highlight the need for a structured, accessible, and transparent land record management system.

## 💡 Our Solution

BhuDrishti AI provides a centralized browser-based interface for exploring land records and identifying entries that may require attention.

The application organizes record information into a dashboard and provides dedicated sections for document uploads, validation, duplicate detection, anomaly detection, land record searches, GIS mapping, and audit tracking.

The goal is to demonstrate how digital tools can support land record management and help officials identify potentially problematic records for further review.

The system is designed as a foundation that can be extended with OCR, computer vision, natural language processing, and secure government database integrations.

---

## ✨ Key Features

### 1. 📊 Interactive Dashboard

- Displays an overview of land record information.
- Presents record statistics and validation categories.
- Highlights records that may require further attention.
- Provides navigation to the application's main modules.

### 2. 📄 Document Upload Interface

- Provides an interface for uploading land record documents.
- Supports a workflow for bringing document information into the application.
- Serves as a foundation for future OCR-based data extraction.

**Note:** The current frontend does not include a complete OCR processing backend.

### 3. ✅ Record Validation

- Organizes records according to their validation status.
- Helps identify entries marked as valid or requiring attention.
- Provides a foundation for checking inconsistencies in land record information.

### 4. 🔎 Duplicate Detection

- Includes a dedicated duplicate detection section.
- Helps identify records flagged as potential duplicates.
- Supports the review of repeated survey or document information.

Duplicate identification in a production system would require reliable matching rules and verification against authoritative records.

### 5. ⚠️ Anomaly Detection

- Provides a dedicated section for records flagged with potential anomalies.
- Supports the review of missing information and suspected inconsistencies.
- Helps prioritize records for manual investigation.

An anomaly flag indicates that a record may need review; it does not establish fraud or prove that a land record is incorrect.

### 6. 🗂️ Land Record Management

- Displays land record information in an organized interface.
- Supports searching and filtering records.
- Helps users explore individual entries and their associated statuses.

### 7. 🗺️ GIS Map

- Includes a geographical mapping interface.
- Uses Leaflet for map functionality.
- Provides a foundation for connecting land record information with geographical locations.

Actual parcel boundaries and authoritative cadastral data require appropriate geospatial datasets and integrations.

### 8. 📈 Reports and Statistics

- Presents record-related statistics.
- Helps users understand the distribution of record statuses.
- Provides a foundation for future administrative reporting and analysis.

### 9. 🕒 Audit Trail

- Includes an audit trail section for tracking relevant application activity.
- Supports the goal of improving transparency in record management.
- Provides a foundation for more comprehensive activity logging.

The current prototype should not be treated as a tamper-proof or legally compliant audit system.

### 10. 💾 Browser-Based Data Persistence

- Uses browser `localStorage` for supported application data.
- Allows locally stored data to persist across page reloads in the same browser.
- Enables the prototype to run without a dedicated application server.

Local storage is browser-specific and is not a substitute for a secure, centralized database.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structures the application's interface |
| CSS3 | Provides styling, layouts, and responsive design |
| JavaScript | Implements interface interactions and application logic |
| Browser localStorage | Stores supported application data locally |
| Leaflet.js | Provides interactive mapping functionality |
| Google Fonts | Supplies typography used by the interface |

### Architecture

The current prototype follows a frontend-based architecture:

**User → Web Interface → JavaScript Application Logic → Browser localStorage**

The mapping interface additionally uses Leaflet and its configured map resources.

A future production architecture could introduce:

**Document Upload → OCR Engine → Data Extraction → Validation Engine → Database → GIS Dashboard**

The second workflow represents a proposed future enhancement, not a claim that the complete pipeline is already implemented.

---

## 📁 Project Structure

The project contains three main application files:

```text
BhuDrishti_AI/
│
├── index.html
├── style.css
└── app.js
```

### `index.html`

Contains the main HTML document, application mounting point, stylesheet references, and JavaScript imports.

### `style.css`

Defines the visual design, including colors, typography, cards, buttons, forms, layout components, and responsive styling.

### `app.js`

Contains the main JavaScript application logic, interface components, navigation, record-related workflows, and browser-based data handling.

---

## 🚀 Getting Started

You do not need to install a JavaScript framework or configure a backend to run the current prototype.

### Prerequisites

- A modern web browser such as Google Chrome, Microsoft Edge, or Firefox.
- The downloaded or cloned project files.
- An internet connection for externally hosted resources such as Google Fonts and the configured Leaflet map resources.

### Step 1: Clone the Repository

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/BhuDrishti-AI.git
```

### Step 2: Open the Project Folder

```bash
cd BhuDrishti-AI
```

### Step 3: Run the Application

Open `index.html` in your browser.

Alternatively, open the project folder in Visual Studio Code and use the Live Server extension to serve the application locally.

### Step 4: Explore the Interface

Navigate through the available sections to explore the dashboard, document upload interface, validation views, duplicate detection, anomaly detection, land records, GIS map, and audit trail.

**Important:** This is a frontend prototype. Some workflows may use sample or locally stored data rather than real government land records or an operational AI service.

---

## ⚙️ How It Works

### Step 1: Access the Dashboard

The dashboard provides an overview of the available record information and the application's main modules.

### Step 2: Explore Land Records

Use the record management interface to search for and review available entries.

### Step 3: Review Validation Statuses

Examine records categorized by their status and identify entries that may require further investigation.

### Step 4: Check Potential Duplicates

Explore records flagged as possible duplicates and review the information associated with those entries.

### Step 5: Investigate Anomalies

Review entries flagged for potential missing information, inconsistencies, or other issues.

### Step 6: Explore GIS Information

Use the mapping interface to explore the geographical component of the application where map resources and location data are available.

### Step 7: Review Activity Information

Use the audit trail interface to explore the application's activity-tracking functionality.

---

## 💾 Data Storage

The current application uses browser `localStorage` for supported data persistence.

This means:

- Data is stored within the browser environment.
- Stored data may remain available after a page reload.
- Data is not automatically synchronized between different users or computers.
- Clearing browser storage may remove locally saved application data.
- Local storage does not provide the access controls, backup guarantees, or centralized management required for a production land records system.

Do not use the prototype to store sensitive personal information or confidential government records.

---

## ⚠️ Current Limitations

BhuDrishti AI is a prototype intended to demonstrate a potential approach to land record management.

The current version has the following limitations:

1. **No production AI backend:** A deployed AI service for automated document analysis is not included.
2. **No complete OCR pipeline:** Automated extraction of text from scanned or handwritten land records requires additional implementation.
3. **No centralized database:** The application uses browser-based storage rather than a shared server database.
4. **No government database integration:** The prototype does not establish a live connection to official land record systems.
5. **No authoritative ownership verification:** Displayed record information cannot independently prove legal ownership.
6. **GIS data dependency:** Accurate parcel mapping requires suitable geographical datasets and verified coordinates.
7. **Limited security guarantees:** Browser storage and frontend code alone cannot provide production-grade authentication, authorization, or audit integrity.
8. **External resource dependency:** Some interface resources, including map-related resources, may require internet access.

These limitations should be addressed before the application is used for official administrative decisions.

---

## 🔮 Future Enhancements

Potential future improvements include:

- **AI-powered OCR:** Extract text from scanned land records and digitize printed documents.
- **Handwriting recognition:** Investigate handwritten record processing using suitable recognition models.
- **Multilingual processing:** Support relevant Indian languages and regional document formats.
- **Natural Language Processing:** Extract fields such as owner names, survey numbers, land area, village, and record references.
- **Automated validation:** Compare extracted fields against configurable validation rules.
- **Advanced duplicate detection:** Identify possible duplicates using combinations of survey numbers, document identifiers, names, and geographical information.
- **Improved anomaly detection:** Flag inconsistent units, missing fields, and suspicious record relationships for human review.
- **Secure backend:** Introduce server-side APIs, authentication, and role-based access controls.
- **Centralized database:** Store records securely with appropriate access restrictions and backup procedures.
- **Verified GIS integration:** Connect records to authorized cadastral maps and reliable geospatial datasets.
- **Tamper-evident audit logging:** Record administrative actions in a way that supports integrity checks and accountability.
- **Document export:** Generate structured reports and digitized record summaries.
- **Accessibility and localization:** Improve usability across devices, languages, and accessibility requirements.

---

## 🎯 Use Cases

The proposed system could support workflows such as:

- Digitizing legacy land record collections.
- Organizing land record information for review.
- Identifying potential duplicate entries.
- Highlighting missing or inconsistent record fields.
- Supporting manual verification by authorized officials.
- Connecting land record information with geographical data.
- Improving visibility into record processing and review status.

These are intended use cases. Actual deployment would depend on successful implementation, validation, and integration with authorized data sources.

---

## 🤝 Contributing

Contributions and suggestions are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make and test your changes.
4. Commit your work with a clear commit message.
5. Open a pull request describing the improvements.

For major changes, consider opening an issue first to discuss the proposed implementation.

---

## ⚖️ Disclaimer

BhuDrishti AI is an educational and prototype project intended to demonstrate a possible approach to land record digitization, validation, and GIS-supported information management.

It is not an official government land record portal and is not a substitute for legally recognized records, authorized verification, or professional legal advice.

Any sample or locally stored data should not be treated as verified government information. Potential duplicates and anomalies require appropriate human review before any administrative or legal action.

---

## 📄 License

No license has been specified for this project yet.

Before publishing the repository for public reuse, consider selecting an appropriate open-source license and confirming that all included code, libraries, and assets can be distributed under its terms.
