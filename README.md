# Carter + Vue.js - Server-side Rendering Starter Project

This project uses Microsoft's [Javascript Services](https://github.com/aspnet/JavaScriptServices) and Vue's [Server-Side Renderer](https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer) to give us a (quite opinionated) project setup for handling SSR in with carter.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [NodeJS](https://nodejs.org/en/download/)
- [Dotnet Core 2.1.1](https://www.microsoft.com/net)

### Installing

Clone this repo

```bash
git clone <inserturl>
```

install the frontend dependencies and run webpack in watch mode

```bash
cd ./wwwroot
yarn && yarn watch
```

OR
install the frontend and do a single build

```bash
cd ./wwwroot
yarn && yarn build
```

Then in another terminal, run the dotnet webserver

```bash
dotnet watch run
```

Navigate to `localhost:5000/helloworld` to see your application

## Deployment

--coming soon--

## Explaination

--coming soon--

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **James Humphries** - *All of it (so far)* - [Yantrio](https://github.com/Yantrio)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Vue.js Server-Side Rendering Guide](https://ssr.vuejs.org/)