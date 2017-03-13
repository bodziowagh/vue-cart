# vue-shopping-cart

> Vue.js simple shopping cart.

## Build Setup

```
# Install dependencies
npm install

# Serve with hot reload at localhost:8081
npm run dev

After the server has started succesfully, go to http://localhost:8081 to access the application.
```

## User guide

The application consists of three separate views:
- homepage, which is just a default welcoming view (route: '/')
- items' list section, containing a list of available items in the database, accessable via one of the header menu tabs (route: '/item-list')
- items' cart section, containing a list of the items selected by the user, accessable via one of the header menu tabs (route: '/item-cart')

In the items' list section, user can select specific items by clicking on them. This results in marking the item as selected in the database and hence making it available in the items' cart section. The selected items are distinguished by different style: available items are more transparent than these selected by user. Clicking again at already selected item results in unselecting it. In items's cat view, only the selected items are displayed, and clicking on them performs no action.

The application has been implemented with some basic responsiveness in mind, feel free to try it on mobile device or in responsive mode in your desktop browser. Due to run the application locally and access it on a mobile device, change the `port` field in the `config/index.js` file, run the application using `npm run dev` (you might need sudo priviliges), and acces the app by typing your local machine's local ip address + `:80` port (you have to be connected to this same network with both devices).

## Implementation
I used vue-cli to generate project files to avoid wasting time on configuring everything myself. The firebase service has been selected as a data source due to its simplicity

Since I'm new to the technology, and I didn't have too much time to work on the application, there are a few future technical improvements I would like to address:
- Adjust the configuration.
- Probably change the database, custom NodeJS + MongoDB server app would be more customizable.
- Use sass instead of pure css for styling the components. I left pure css for now, because I've had some problems applying an appropriate loder in webpack config, and didn't have time to investigate the issue in more details.
- Export firebase refs getters into the FirebaseService.
- Apply translations/internationalization.
