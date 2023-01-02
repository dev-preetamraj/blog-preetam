---
title: 'About my project - CodeTogether'
excerpt: 'Code Together is an online collaborative code compiler which uses the principle of socket programming to interact with all users present in a room group in real time. The underlying concept of this project is to connect users in a room and give them facility to code together, chat together and draw together.'
image: 'https://i.natgeofe.com/n/665bbbca-1316-48b6-bce1-1ccb984a7546/0000014e-7468-d37e-a7de-ffe951310001_3x2.jpg'
author: 'Preetam Raj'
published_at: '2 January - 2023'
---

## Online collaborative Code Compiler

Code Together is an online collaborative code compiler which uses the principle of socket programming to interact with all users present in a room group in real time. The underlying concept of this project is to connect users in a room and give them facility to code together, chat together and draw together.

## Technologies Used:
1. Django
1. Django Channels
1. Javascript
1. Docker
1. Redis
1. HTML5
1. CSS3

## Run this project in your local PC
1. Clone the project:
    ```bash
    git clone git@github.com:iitianpreetam/code_together.git
    ```

1. Go to the directory:
    ```bash
    cd code_together
    ```

1. Create Virtual Environment:
    ```py
    ~ python -m venv env
    OR
    ~ virtualenv env
    ```

1. Activate Virtual Environment:
    - Windows:
    ```bash
    .\env\Scripts\activate
    ```

    - Linux/MacOS
    ```bash
    source env/bin/activate
    ```

1. Install Requirements
    ```py
    pip install -r requirements.txt
    ```

1. Start Django development server
    ```py
    python manage.py runserver
    ```
1. Redis setup on docker:
    - Install docker desktop
    - Pull redis image and create a container:
        ```bash
        docker run --name <container_name> -p 6379:6379 -d redis
        ```
    - This will start redis server, if not started then open docker desktop and start ther server from there.

1. Access Application on: `http://127.0.0.1:8000`

## Example Javascript Code

```js
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import {theme} from '../theme/theme';
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Container>
                {children}
                <div>
                    Hello World
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default Layout;
```

## Example Python Code

```python
def add(a, b):
    return a+b
```