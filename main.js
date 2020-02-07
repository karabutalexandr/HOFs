var users;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
        .then(response => {
            users = response;

            // var sortUsers = users.sort((a, b) => {
            //     if (a.name > b.name) {
            //       return 1;
            //     }
            //     if (a.name < b.name) {
            //       return -1;
            //     }
            //     return 0;
            // });
            // console.log('sortUsers', sortUsers);

            // var upperCaseUsers = users.map((item) => item['name'].toUpperCase());
            // console.log('upperCaseUsers', upperCaseUsers);

            // var filterCaseUsers = users.filter((item) => item['address']['zipcode'][0] > 5)
            // console.log(filterCaseUsers)

            // var reduceUsers = users.reduce((sum, current) => {
            //     return sum + current['username'].length
            // }, 0)
            // console.log('reduceUsers', reduceUsers)
            function usersList(userValue) {
                userValue.forEach((item) => {
                    console.log('New List')
                    function checkValue(item){
                        for (var key in item) {
                            if(typeof (item[key]) === 'object') {
                                checkValue(item[key])
                            } else {
                                console.log(`${key}: ${item[key]}`)
                            }
                        }
                    }
                    checkValue(item)
                })
            }
            usersList(users)
        })
    );



