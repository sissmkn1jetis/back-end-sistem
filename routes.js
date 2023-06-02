const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut V3';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage V3';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name}',
        handler: function (request, h) {
    
            const name = request.params.name;
            return 'Hello ' + name
        }
    },
    {
        method: 'GET',
        path: '/home',
        handler: function (request, h) {
    
            return h.redirect('/');
        }
    },
    {
        method: 'GET',
        path: '/user',
        handler: function (request, h) {
    
            const user = {
                firstName: 'John',
                lastName: 'Doe',
                userName: 'JohnDoe',
                id: 123
            }
    
            return user;
        }
    }
];

module.exports = routes;
