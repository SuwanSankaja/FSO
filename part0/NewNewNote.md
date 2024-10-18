```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Enters text and clicks "save"
    Note right of browser: Browser captures the input and prepares to send it to the server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with note content
    activate server
    Note right of server: Server processes the request and saves the new note

    server-->>browser: JSON response with updated note list [{ "content": "New note content", "date": "2024-10-18" }, ...]
    deactivate server

    Note right of browser: Browser dynamically updates the displayed notes without reloading the page
