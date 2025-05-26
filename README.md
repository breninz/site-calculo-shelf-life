# Shelf Life Calculation Project

This project aims to calculate the shelf life of products, helping to determine their validity and safety. We are currently in the **first version** of the project.

## What is Shelf Life?

**Shelf life** is the length of time that a commodity may be stored without becoming unfit for use, consumption, or sale. 
- In **product management**, it's a crucial factor for inventory control, ensuring that products reach consumers with adequate time for use. 
- For **consumer safety**, understanding shelf life helps prevent the consumption of spoiled or ineffective products.

## Motivation

The idea came up in my current job as a buyer. I need to check the expiration dates of materials before receiving them, as some customers only accept products with a certain percentage of shelf life remaining.
Instead of performing multiple calculations to identify the shelf life percentage, the user only needs to input the manufacturing and expiration dates, and the calculation will be done automatically, optimizing time and accuracy.

## Target Audience

This tool can be used by any user, as long as they act with ethics and integrity. It is particularly useful for:
- Buyers and procurement specialists
- Inventory managers
- Quality control personnel
- Consumers who want to understand product freshness

## Calculation Logic

The project calculates the remaining shelf life percentage using the following formula:

`Remaining Shelf Life % = ((Expiration Date - Current Date) / (Expiration Date - Manufacturing Date)) * 100`

This formula determines the proportion of time remaining before the product expires, relative to its total lifespan from manufacturing to expiration.

## Features

- Accurate shelf life calculation:
    - Total shelf life in days.
    - Consumed and remaining shelf life percentage.
- User-friendly interface for data entry.
- Clear display of product validity information.

## How to Use

1.  Open the `index.html` file in your web browser.
2.  Locate the input fields for **"Manufacturing Date"** and **"Expiration Date"**.
3.  Enter the manufacturing date of the product using the date picker.
4.  Enter the expiration date of the product using the date picker.
5.  Click the **"Calculate Shelf Life"** button to see the total shelf life in days.
6.  Click the **"Calculate Percentage"** button to see the consumed and remaining shelf life percentage.
7.  The results will be displayed below the respective buttons.
8.  Click the **"Clear Fields"** button to reset the date inputs and the displayed results.

## Technologies Used

- HTML
- CSS
- Basic JavaScript

## Future Enhancements

Here are some potential ideas for future development:

-   **Save Calculation History:** Implement functionality to save previous calculations (e.g., using browser local storage) for easy reference.
-   **Target Shelf Life Percentage:** Allow users to input a desired minimum shelf life percentage and have the tool indicate if a product meets this criterion.
-   **Batch Processing:** Enable users to input data for multiple products at once and calculate their shelf lives simultaneously.
-   **Visual Status Indicators:** Introduce color-coded visual cues (e.g., green for >75% remaining, yellow for 25-75%, red for <25%) to quickly assess shelf life status.
-   **Internationalization (i18n):** Add support for multiple languages to make the tool accessible to a wider audience.
-   **Product Database Integration:** Allow users to connect to a product database to automatically fetch manufacturing and expiration dates.
-   **Customizable Alerts:** Enable users to set up alerts for products nearing their expiration or a specific shelf life percentage.

## Contributing

We welcome contributions to the Shelf Life Calculation Project! If you're interested in helping, please consider the following:

-   **Reporting Issues:** If you find a bug or have a suggestion for improvement, please open an issue on the GitHub repository. Provide as much detail as possible, including steps to reproduce the issue.
-   **Submitting Pull Requests:** If you'd like to contribute code, please fork the repository and submit a pull request with your changes.
    -   Ensure your code follows the existing style and is well-commented.
    -   Provide a clear description of the changes you've made.
-   **Be Respectful:** Please be respectful and constructive in all discussions and interactions.

## License

This project is currently not under a specific license. We are working on adding an MIT License soon.
