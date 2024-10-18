```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Enters text and clicks "save"
    Note right of browser: Browser captures the input data
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: Server processes the request and saves the new note

    server-->>browser: Redirects to /notes (302 redirect)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Updated JSON with new note [{ "content": "HTML is easy", "date": "2023-1-1" }, { "content": "New note content", "date": "2024-10-18" }, ...]
    deactivate server

    Note right of browser: Browser updates the notes display with the new note
