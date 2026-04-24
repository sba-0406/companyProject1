# How to Send JSON in Postman

You asked: *"Body -> raw -> JSON... how is this done?"*

Here is the step-by-step with pictures (mental ones!):

1.  **Method**: Change the dropdown next to the URL from `GET` to **`POST`**.
2.  **URL**: Enter `http://localhost:3000/echo`.
3.  **Body Tab**:
    *   Below the URL bar, look for a row of tabs: `Params`, `Authorization`, `Headers`, **`Body`**. Click **`Body`**.
4.  **Select Raw**:
    *   In the options that appear (`none`, `form-data`, `x-www-form-urlencoded`, `raw`, `binary`, `GraphQL`), select the radio button **`raw`**.
5.  **Select JSON**:
    *   A dropdown will appear to the right (it might say `Text` by default). Click it and select **`JSON`**.
6.  **Enter Data**:
    *   In the big text area below, type your JSON:
        ```json
        {
            "message": "Hello Node"
        }
        ```
7.  **Send**: Click the blue **Send** button.

## What should happen?
*   **In Postman**: You should see the exact same JSON come back in the response pane (bottom).
*   **In Terminal**: You should see `Received Body: {"message": "Hello Node"}`.
