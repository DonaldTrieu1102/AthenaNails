var db = require('../../utils/db');

module.exports = {
    getPromotion: () =>{
        return db.excute("SELECT * FROM `promotions` WHERE  DATEDIFF(promotions.end_day,CURRENT_TIMESTAMP) >= 0 && DATEDIFF(CURRENT_TIMESTAMP,promotions.start_day) >= 0");
    }
};