const express = require('express')
const app = express();
app.use(express.json());
app.use(express.urlencoded({
        extended: true
}))

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)
    .then(()=>{
        Customer.deleteMany({},(err)=>{
    if (err){
        process.exit();
            }
            console.log('Remove Collectiion of Customer')
            initCustomer();
        });
    }).catch(err=>{
        console.log('Cannot Connect to MongoDB')
        process.exit();
    })
app.use(cors())
require('./routes/customer.route.js')(app);

const server = app.listen(3000, ()=>{
    let port = server.address().port
    console.log('Run at mongodb://localhost:27017/Nakorn', port)
})

function initCustomer(){
    let data = [
        {
            CustomerId: 1001,
            FullName: "Nakorn",
            Address: "Rayong"
        },
        {
            CustomerId: 1002,
            FullName: "Big",
            Address: "Bangkok"
        },
        {
            CustomerId: 1003,
            FullName: "Thunwa",
            Address: "Bangkok"
        }
    ]
    for(let i=0; i<data.length; i++){
        const c = new Customer(data[i]);
        c.save()
    }
    console.log("สร้างข้อมูล Customer สำเร็จแล้ว")
}
