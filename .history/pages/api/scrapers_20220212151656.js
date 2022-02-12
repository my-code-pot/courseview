// const axios = require("axios");
// const cheerio = require("cheerio");
// const { MongoClient }= require('mongodb');
// const fetchDepartments = async () => {
// 	try {
// 		const response = await axios.get('https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194');

//         const html = response.data;

// 		const $ = cheerio.load(html);

// 		const departments = [];

// 		$('.program-list li').each((_idx, department) => {
// 			const departmentName = $(department).text();
//             const departmentURL='https://catalog.swarthmore.edu/'+$(department).find('a').attr('href');
// 			departments.push({
//                 name:departmentName.substring(3),
//                 url:departmentURL
//             })
// 		});
// 		return departments;
// 	} catch (error) {
// 		throw error;
// 	}
// };
// const fetchCourses = async (url) =>{
//     try{
//         const response = await axios.get(url);

//         const html = response.data;

// 		const $ = cheerio.load(html);

//         let courses=[];

//         $('.acalog-course').each((_idx, course) => {
// 			const CourseName = $(course).text();
// 			courses.push(CourseName)
// 		});
//         return courses;
//     }catch{
//         throw error;
//     }   
// }

// const getCoursesForAllDepartments= async () =>{
//     const departments=await fetchDepartments();
//     departmentsCourses=[];
//     for (let i=0;i<departments.length;i++){
//         try{

//             const courses= await fetchCourses(departments[i].url);

//             departmentsCourses.push({
//                 "name":departments[i].name,
//                 "courses":courses,
//             });

//         } catch{
//             throw error;
//         }
//     }
//     return departmentsCourses;
// }

// async function InsertIntoMongoDB(){
//     const url="mongodb+srv://ihassou1:Swarth_12345@cluster0.jmjdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//     const client= new MongoClient(url);
//     const departmentsCourses=await getCoursesForAllDepartments();
//     try {
//         await client.connect(); 
//         await client.db("CourseView").collection("departmentsCourses").insertMany(departmentsCourses);
//     }
//     catch(e) {
//         console.log(e);
//     }
//     finally {
//         await client.close();
//     }
// }
// InsertIntoMongoDB().catch(console.error);

