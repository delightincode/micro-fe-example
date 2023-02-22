
# Micro Front-ends

The Counter App consists of three separate applications (one container and two separated apps), two written in `ReactJS` and another written in `VueJs`. Each application has its own distinct functionality but both can be used together within the same page on a website or app interface. The React part handles user interaction such as clicking buttons which will increment or decrement an integer value stored in memory, while the Vue part renders it into HTML elements so that users can see it on screen when they open up their browser window. Both pieces can communicate, passes information back and forth between them whenever necessary so that everything works properly even though they’re not running at exactly the same time like traditional monolithic apps would do normally . 

## Screenshot

![A Screenshot of a Micro Front-ends Counter App built with ReactJS and VueJS](screenshot.gif?raw=true "Micro Front-ends Counter App")

## Tech Stack

**Container & Counter**: React

**Message**: VueJS

**Module bundler**: Webpack


## Installation

Install each app using `npm`

```bash
  cd counter
  npm install
  npm run start
```

```bash
  cd container
  npm install
  npm run start
```

```bash
  cd message
  npm install
  npm run start
```

Access Container app by `http://localhost:8080`
    
## Related Blog post

Check out our blog post for more information on how you can benefit from this technology

[Micro Front-ends (Part 1)](https://delightincode.com/?p=1967)

