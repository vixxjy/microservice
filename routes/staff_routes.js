// creating a staff route
var objectID = require('mongodb').ObjectID;



module.exports = function(app, db) {
    

    
    app.post('/staff', (req, res) => {
    // You'll create your note here.
        const staff_data = {
            firstname: req.body.firstname,
            middlename: req.body.middlename, 
            lastname: req.body.lastname, 
            gender: req.body.gender, 
            religion: req.body.religion,
            bloodgroup: req.body.bloodgroup,
            state: req.body.state,
            lga: req.body.lga,
            date_of_birth: req.body.date_of_birth,
            photo: req.body.photo
        };
        db.collection('staff').insert(staff_data, (err, result)=> {
            if(err){
                res.send({'err': 'an occured while sending to db'});
            }else{
                res.send(result.ops[0]);
            }
        });
  });
  
  
    app.get('/staff/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new objectID(id)};
        db.collection('staff').findOne(details, (err, item)=>{
            if(err){
                res.send({'err': 'an occured while fetching a staff from db'});
            }else{
                res.send(item);
            } 
        });
    });
    
    
    app.put('/staff/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new objectID(id)};
        const staff_data = {
            firstname: req.body.firstname,
            middlename: req.body.middlename, 
            lastname: req.body.lastname, 
            gender: req.body.gender, 
            religion: req.body.religion,
            bloodgroup: req.body.bloodgroup,
            state: req.body.state,
            lga: req.body.lga,
            date_of_birth: req.body.date_of_birth,
            photo: req.body.photo
        };
        db.collection('staff').update(details, staff_data, (err, item)=>{
            if(err){
                res.send({'err': 'an occured while fetching a staff from db'});
            }else{
                res.send(staff_data);
            } 
        });
    });
  
     app.delete('/staff/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new objectID(id)};
        db.collection('staff').remove(details, (err, item)=>{
            if(err){
                res.send({'err': 'an occured while deleting a staff from db'});
            }else{
                res.send('Note ' + id + ' deleted');
            } 
        });
    });
};