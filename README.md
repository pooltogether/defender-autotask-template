# defender-autotask-template
Template repository to kickstart an OpenZeppelin Defender autotask

## Development

### Env

We use [direnv](https://direnv.net) to manage environment variables. You'll likely need to install it.

Copy `.envrc.example` and write down the env variables needed to run this project.
```
cp .envrc.example .envrc
```

Once your env variables are setup, load them with:
```
direnv allow
```

### Autotask

Entrypoint for the autotask is located in `src/handler.ts`

#### Test

To test your autotask locally, run the command:
```
yarn start
```

#### Update

Once your task is properly working, you can push it to defender by running:
```
yarn update
```

### Code quality

[Prettier](https://prettier.io) is used to format TypeScript code. Use it by running:

```
yarn format
```
