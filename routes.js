const express = require('express');
const router = express.Router();
// const http = require ('http');
// const fs = require ('fs');
const userData = require('./users.json');

// static routing
    router.use('/chapter3', express.static('chapter3'))
    router.use('/chapter4', express.static('chapter4'))

    // JSON routing
    // router.get("/users", (req, res) => {
    //     fs.readFile("./users.json", "utf-8", (err, data) => {
    //     if (err) throw err;
    //     let userData = JSON.parse(data);
    //     res.json(userData);
    //     });
    // });

    // fungsi me    
    function GetSortOrder(item) {    
        return function(a, b) {    
            if (a[item] > b[item]) {    
                return 1;    
            } else if (a[item] < b[item]) {    
                return -1;    
            }    
            return 0;    
        }    
    } 

    let newData= userData.users.sort(GetSortOrder("name"));

        router.get("/users", (req, res) => {
            res.json(newData);
        });

    // // JSON routing
    // router.get('/users', (req,res) => {
    //     fs.readFile ('./users.json', 'utf-8', (err,data) => {
    //         if ( err ) throw err ;
    //         // let userData = JSON.parse(data);
    //         // console.log(userData);
    //         http.createServer((req, res) =>{
    //             res.writeHead(200, {'Content-Type': 'application/json'});
    //             // res.end(JSON.stringify(userData));
    //             res.json(data);
    //         })
    //     })
    // })

// Handle 404 URLs
    router.use('*', (req, res) => {
        res.json({"message": "URL not found"});
    });

module.exports = router;