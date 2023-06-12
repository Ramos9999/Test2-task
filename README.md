## Node Version

Running `nvm use` will automatically switch you to the version of node being
used by this project. This value is saved in the `.nvmrc` file.

## Useful Commands

- `npm run dev`: For runnning the loacla server
- `npm run test`: For runnning the unit tests for the component and utils
- `npm run test:watch:`: For runnning the unit tests for the component and utils
  and rerunning it when is changed
- `npm run lint`: For fixing lint

## Environment variables

- Token - for github token so the api can make the calls

## Routes

- Home page (Search page): `/`
- Users page: `/users?query=*`
- Reposatories page: `/reposatories?query=*`
- Users api: `/users?users=*`
- Reposatories api: `api/reposatories?reposatories=*`
