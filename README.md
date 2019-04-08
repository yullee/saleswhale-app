# saleswhale-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Features
- Persist data retrived from Firebase  
- Add a team (users need to enter team name and description only. currently I have set some static data eg. date, is_favorited...)
- Search a team (results will be displayed on the 'All tab')
- Set favorites
- Spinner to indicate a current loading status
- Vue-notification for add/favorite features 
- Navigate between multiple routes and tabs
- Responsive pages (okay with resizing the page) 

### Basic Structure 
├── index.html
├── main.js
├── api
│   └── Firebase
├── src
│   ├── App.vue
│   │   └── view
│   │       ├── Team.vue      # Team router-view
│   │       │   └── Container.vue
│   │       │       ├── NavTitle.vue
│   │       │       └── NavCreate.vue
│   │       │
│   │       ├── Chat.vue      # Chat router-view
│   │       │   └── Container.vue
│   │       ├── Contact.vue   # Contact router-view
│   │       │
│   │       ├── Reports.vue   # Reports router-view 
│   │       └── Container.vue # all views use this component as a basic structure  
│   │
│   └── components            # reusuable UI components    
│   │   ├── Spinner.vue
│   │   ├── Button.vue
│   │   ├── Icon.vue
│   │   ├── Typography.vue
│   │   └── Modal.vue
│   │
│   └── controller / model
│       ├── Navs 
│       │   ├── NavLeft.vue    # where we select icons to display router-views 
│       │   ├── NavTitle.vue   # where we see a view title / user info 
│       │   ├── NavCreate.vue  # where we create teams
│       │   └── NavContent.vue # where we see a main content 
│       └── Cards
│           ├── TeamCard.vue
│           └── ActivityCard.vue
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
 