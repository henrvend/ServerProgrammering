'use strict';

const fs = require('fs');

let filename = 'test.txt';

fs.stat(filename, (err, stat)=>{

    if(err){
        return console.error('Ingen fil finns' + filename);
    }
    else{
        fs.watch(filename, ()=>{
            console.log('Filen har ändrats');
            let filetext = fs.readFileSync(filename).toString();
            console.log('Nya filens innehåll ' + filetext);
        });
    }

});

console.log('test');