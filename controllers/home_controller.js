const Task = require("../models/tasks");

module.exports.home = function (req, res) {

    Task.find({}, function (err, tasks) {
        if (err) {
            console.log('Error in fetching contacts from db');
            return;
        }
        return res.render('home', {
            title: 'TODO APP',
            taskList: tasks
        });
    })

}

function DateValeu(dueDate) {
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']

    newdate = '';
    let monapp = '';

    if (dueDate[1] == '01') {
        monapp = months[0];
    }
    else if (dueDate[1] == '02') {
        monapp = months[1];
    } else if (dueDate[1] == '03') {
        monapp = months[2];
    } else if (dueDate[1] == '04') {
        monapp = months[3];
    } else if (dueDate[1] == '04') {
        monapp = months[3];
    } else if (dueDate[1] == '05') {
        monapp = months[4];
    } else if (dueDate[1] == '06') {
        monapp = months[5];
    } else if (dueDate[1] == '07') {
        monapp = months[6];
    } else if (dueDate[1] == '08') {
        monapp = months[7];
    } else if (dueDate[1] == '09') {
        monapp = months[8];
    } else if (dueDate[1] == '10') {
        monapp = months[9];
    } else if (dueDate[1] == '11') {
        monapp = months[10];
    } else if (dueDate[1] == '12') {
        monapp = months[11];
    }
    newdate = dueDate[2] + ' ' + monapp + ' ' + dueDate[0]
    return newdate;
}

module.exports.addTasks = function (req, res) {
    dueDate = req.body.date.split('-');
    let newdate = '';
    newdate = DateValeu(dueDate);
    Task.create({
        desc: req.body.desc.toUpperCase(),
        cat: req.body.cat.toUpperCase(),
        date: newdate
    }, function (err, newTask) {
        if (err) { console.log('error in creating a task!'); return; };
        console.log('******', newTask);

        console.log(req.body);
        return res.redirect('back');
    });
}

// module.exports.deleteTask = function(req , res){
//     Task.findByIdAndDelete(req.query.id, (err) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         return res.redirect('back');
//       });
// }

module.exports.deleteTask = function (req, res) {
    if(typeof req.body.delechack === 'string') {
        ids = [req.body.delechack];
    }
    else {
        ids = req.body.delechack;
    }
    console.log(ids);
    for (let id of ids) { 
        Task.findByIdAndDelete(id, function (err) {
            if (err) {
                console.log('err')
                return;
            }
        })
    }
    return res.redirect('/');
}