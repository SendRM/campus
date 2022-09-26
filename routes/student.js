const student = require('express').Router();

// 请假
student.get('/leave/:sno', require('./actions/student/leaveInfoCount'));
student.get('/leave/info/:sno', require('./actions/student/leaveStudentInfo'));
student.post('/leave', require('./actions/student/createLeaveApplication'));
// 报修
student.get('/repair/:sno', require('./actions/student/repairInfoCount'));
student.post('/repair', require('./actions/student/createRepairApplication'));
// 投诉
student.get('/complaint/:sno', require('./actions/student/complaintInfoCount'));
student.post('/complaint', require('./actions/student/createComplaintApplication'));

module.exports = student;