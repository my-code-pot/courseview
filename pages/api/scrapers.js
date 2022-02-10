const axios = require("axios");
const cheerio = require("cheerio");

const fetchDepartments = async () => {
	try {
		const response = await axios.get('https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194');

        const html = response.data;

		const $ = cheerio.load(html);

		const departments = [];

		$('.program-list li').each((_idx, department) => {
			const departmentName = $(department).text();
            const departmentURL='https://catalog.swarthmore.edu/'+$(department).find('a').attr('href');
			departments.push({
                name:departmentName.substring(3),
                url:departmentURL
            })
		});
		return departments;
	} catch (error) {
		throw error;
	}
};
const fetchCourses = async (url) =>{
    try{
        const response = await axios.get(url);

        const html = response.data;

		const $ = cheerio.load(html);

        let courses=[];

        $('.acalog-course').each((_idx, course) => {
			const CourseName = $(course).text();
			courses.push(CourseName)
		});
        return courses;
    }catch{
        throw error;
    }   
}

const getCoursesForAllDepartments= async () =>{
    const departments=await fetchDepartments();
    departmentsMap={};
    for (let i=0;i<departments.length;i++){
        try{

            const courses= await fetchCourses(departments[i].url);

            departmentsMap[departments[i].name]=courses;

        } catch{
            throw error;
        }
    }
    return departmentsMap;
}

const test= async ()=>{
    console.log(await getCoursesForAllDepartments());
}
test()

