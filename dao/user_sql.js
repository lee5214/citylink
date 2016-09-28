/**
 * Created by lee on 9/7/16.
 */
var user = {
    insertDriver:'INSERT INTO driver_info(id, pick_up_location, drop_down_location, start_date, start_time, name, age, phone, email, language, price, seat, car_type) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)',
    insertPassenger:'INSERT INTO passenger_info(id, pick_up_location, drop_down_location, start_date, start_time, name, age, phone, email, language, price, seat, car_type) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)',
    update:'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAllDriver: 'select * from driver_info',
    queryAllPassenger: 'select * from passenger_info'
};
module.exports = user;