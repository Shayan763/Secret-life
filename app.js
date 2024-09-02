require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();



//api Middleweres 
app.use(express.json());
app.use(cors());




// api routing
// app.use('/api', require('./Routes/File'));
app.use('/api/auth', require('./Routes/Auth'));
app.use('/api/book', require('./Routes/book'));
app.use('/api/categorie', require('./Routes/categorie'))
app.use('/api/seriesBook', require('./Routes/seriesBook'))
app.use('/api/audioBook', require('./Routes/audioBook'))
app.use('/api/audioCategory', require('./Routes/audioCategory')) 
app.use('/api/payment', require('./Routes/payment')) 
app.use('/api/promoCode', require('./Routes/promoCode')) 
app.use('/api/cancelledusers', require('./Routes/cancelledusers')) 
app.use('/api/faqscategory', require('./Routes/faqscategory')) 
app.use('/api/faqsQa', require('./Routes/faqsQa')) 
app.use('/api/notification', require('./Routes/notification')) 
app.use('/api/contactUs', require('./Routes/contactUs')) 
app.use('/api/topcategories', require('./Routes/topcategories')) 
app.use('/api/refundUser', require('./Routes/refundUser')) 










mongoose
    .connect(process.env.dburi)
    .then((result)=>{

        console.log('connected to db', result.connections[0].host);
        app.listen(process.env.Port || 8080, () =>{
            console.log('~~~~ server is up & running ~~~~~')
        });
    })

    .catch((err) => console.error(err));