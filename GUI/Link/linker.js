/* This script is responsible for connecting the Electron front end
with the Python back end */

function getPass() {

    let {PythonShell} = require("python-shell")
    var path = require("path")

    var length = document.getElementById("length").value

    var passOut = document.getElementById("pass")
    passOut.value = "";

    var connector = {
        scriptPath : path.join(__dirname, '/../src/'),
        args :  [length]
    }

    /* Calls in Python script */
    PythonShell.run('pyGen.py', connector, function (err, results) {
        if (err){
            console.error(err)
        } else{
            passOut.innerText = results
        }
    });

}

