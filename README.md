# King Maker React Native SDK

This is the Javascript SDK for accessing the KingMaker API. Use this api to access the endpoints as need.

### Auth Token
When a user logins or registers, they will receive an Auth Token. In React Native, store as such:

    syncStorage.setItem('AUTH_TOKEN', some_token)

This auth token will be used to authenicate the user's access to the API.

### API URL

The API URL is being accessed as such:

    process.env['API_URL']

This means that in your react native app, store the api url, http://someurl , in environment variables to access the correct api.
